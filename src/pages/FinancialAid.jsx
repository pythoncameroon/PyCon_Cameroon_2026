import React from 'react';

const FinancialAid = () => {
    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>Financial Aid <span className="text-gradient">Programme</span></h1>
                    <p>PyCon Cameroon 2026</p>
                </div>
            </header>

            <section className="section">
                <div className="container legal-content">
                    <h2>About the Financial Assistance Programme</h2>
                    <p>We are delighted you are interested in attending PyCon Cameroon 2026, which will be held in Yaoundé, Cameroon. As part of our commitment to fostering an inclusive community, we recognize that some individuals may need financial assistance to make conference participation possible.</p>
                    
                    <h3>Grant Availability and Coverage</h3>
                    <p>Due to budget limitations, we can only support a small number of attendees with financial aid grants. These grants will be awarded based on financial need and responses provided in the application form. Please note that approved grants may only cover certain expenses (e.g. conference ticket but not accommodation). Any expenses not covered by your specific grant would remain your responsibility.</p>
                    
                    <h3>Application Details</h3>
                    <p>Please complete the form to provide details on your financial needs and circumstances. This information is essential for the grants review committee to evaluate applicants and make fair and informed decisions on grant recipients.</p>
                    <p>We welcome your open and honest responses, even for basic needs. Our goal is to make the conference accessible to as many Python enthusiasts as possible.</p>
                    <p>Your application will be treated in complete confidence.</p>

                    <h2>Who Will Receive Financial Assistance?</h2>
                    <p>We'd love to be able to help all those who submit applications, but our funds are not unlimited, so sadly we won't be able to meet all requests.</p>
                    <p>The financial assistance programme will prioritise:</p>
                    <ul>
                        <li>Speakers</li>
                        <li>Those who will contribute back to their local communities</li>
                        <li>Those who will help increase diversity at the event and in Cameroonian and African programming</li>
                    </ul>
                    <p>We will do our best to maximise the impact of our financial assistance funding.</p>

                    <h2>How to Apply</h2>
                    <p>Please complete our form before the application deadline (to be announced). We will not accept applications after the stated date.</p>
                    <p>Read the questions on the form carefully and answer them as best you can.</p>
                    
                    <h3>What Can I Request?</h3>
                    <p>You can request a free ticket only, or a grant as well as a free ticket. Anyone who is allocated a grant will automatically receive a free ticket.</p>
                    
                    <h3>How Much Should I Request?</h3>
                    <p>Our budget is limited, and we will have to make some hard decisions. Generally, it is easier for us to accept smaller requests, as a single large request could consume most of our budget. The lower your request, the more likely it is that we will be able to accept it.</p>
                    <p>You need to consider:</p>
                    <ul>
                        <li>How much you will need to spend in total in order to attend the conference</li>
                        <li>How much of this you can contribute yourself</li>
                    </ul>
                    <p>The difference between these two figures is the amount you should request.</p>

                    <h2>How Should I Calculate How Much to Request?</h2>
                    <p>You will need to budget for:</p>
                    <ul>
                        <li>Travel</li>
                        <li>Visa, if necessary</li>
                        <li>Accommodation</li>
                        <li>Subsistence (evening meals, local transport, etc.) while in Yaoundé</li>
                    </ul>
                    
                    <h3>Travel</h3>
                    <p>Spend a little time researching your options. If you will need to travel by air, use websites such as Skyscanner to estimate the cost of airfare. Be aware that a little flexibility with dates or routes can make a huge difference to the price of an air ticket.</p>
                    
                    <h3>Accommodation</h3>
                    <p>There are many websites that will allow you to estimate the cost of accommodation, such as Hotels.com or Booking.com. If you know someone else who is also travelling, you can share a room to lower costs. If you are willing to share a room, let us know in your application.</p>
                    <p>Be reasonable — we want you to stay somewhere clean, safe, and comfortable, but we cannot afford to place you in a luxury hotel!</p>
                    
                    <h3>Subsistence</h3>
                    <p>You will have lunch and refreshments each day as part of the conference. In Yaoundé, you can get a decent evening meal for a very affordable price. Local transport by taxi or moto-taxi is also inexpensive.</p>

                    <h2>Timeline</h2>
                    <p>Exact dates will be announced — the structure will follow this general pattern:</p>
                    <ul>
                        <li>Financial aid application opens: To be announced</li>
                        <li>Financial aid application closes: To be announced</li>
                        <li>Financial aid grants awarded: To be announced</li>
                        <li>Deadline to accept/decline financial aid: To be announced</li>
                        <li>Disbursement sessions at PyCon Cameroon: At the conference venue, Yaoundé</li>
                    </ul>
                    
                    <h2>When Will I Receive the Funds?</h2>
                    <p>Funds will be provided to successful applicants on attendance at the conference.</p>
                    <p>Unfortunately, applicants for financial assistance who have received funds in advance and have failed to attend have damaged previous events. Our financial situation cannot withstand this kind of abuse.</p>
                    <p>In exceptional circumstances, we may be able to provide funds in advance to those who would otherwise find it impossible to attend. Please contact us as soon as possible if this is the case.</p>

                    <p>PyCon Cameroon 2026 is organised by a team of volunteers on behalf of the Python community in Cameroon.</p>
                    <p>Contact us: <a href="mailto:organizers@pythoncameroon.org" style={{ color: 'var(--color-orange)' }}>organizers@pythoncameroon.org</a></p>
                </div>
            </section>
        </>
    );
};

export default FinancialAid;
