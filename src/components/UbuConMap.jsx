import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ubuntuIcon = new L.DivIcon({
    html: `<img src="https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png" style="width:32px;height:32px;border-radius:50%;" alt="Ubuntu" />`,
    className: 'ubuntu-map-marker',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20],
});

const CAMEROON_CENTER = [5.9631, 10.1591];

const UbuConMap = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://ubucon.org/events.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch events');
                return res.json();
            })
            .then((data) => {
                const today = new Date().toISOString().split('T')[0];
                setEvents(data.filter((evt) => evt.date >= today));
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-dark-alt)', borderRadius: 'var(--radius-md)' }}>
                <p style={{ color: 'var(--color-text-secondary)' }}>Loading map...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-dark-alt)', borderRadius: 'var(--radius-md)' }}>
                <p style={{ color: 'var(--color-text-secondary)' }}>Could not load UbuCon events.</p>
            </div>
        );
    }

    return (
        <MapContainer
            center={CAMEROON_CENTER}
            zoom={4}
            style={{ height: '450px', width: '100%', borderRadius: 'var(--radius-md)' }}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {events.map((evt, i) => (
                <Marker key={i} position={evt.coordinates} icon={ubuntuIcon}>
                    <Popup>
                        <strong>{evt.event}</strong>
                        <br />
                        <span style={{ fontSize: '0.85em' }}>{evt.date}</span>
                        <br />
                        <span style={{ fontSize: '0.85em', color: '#666' }}>{evt.address}</span>
                        <br />
                        <a href={evt.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85em' }}>
                            Visit website
                        </a>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default UbuConMap;
