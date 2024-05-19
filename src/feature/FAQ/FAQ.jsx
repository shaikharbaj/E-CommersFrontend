import React, { useState } from 'react'
import styles from './faq.module.css'
const FAQ = () => {
    const [activeTab, setActiveTab] = useState(0);
    const toggleTab = (tab) => {
      if (activeTab === tab) {
        setActiveTab(0);
      } else {
        setActiveTab(tab);
      }
    };
    return (
        <div>

            <div className={`${styles.section} `}>
                <h2 className={styles.heading}>FAQ</h2>
                <div className={styles.faq_wrapper}>
                   

                    {/* <div className={styles.faq}>
                        <button
                            className={styles.faq_btn}
                            onClick={() => toggleTab(2)}
                        >
                            <span className={styles.faq_question}>
                                What is your return policy?
                            </span>
                            {activeTab === 2 ? (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            )}
                        </button>
                        {activeTab === 2 && (
                            <div className="mt-3">
                                <p className={styles.answer}>
                                    If you're not satisfied with your purchase, we accept returns
                                    within 30 days of delivery. To initiate a return, please email
                                    us at support@myecommercestore.com with your order number and a
                                    brief explanation of why you're returning the item.
                                </p>
                            </div>
                        )}
                    </div> */}

                    <div className={styles.faq}>
                        <button
                            className={styles.faq_btn}
                            onClick={() => toggleTab(3)}
                        >
                            <span className={styles.faq_question}>
                                How do I track my order?
                            </span>
                            {activeTab === 3 ? (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            )}
                        </button>
                        {activeTab === 3 && (
                            <div className="mt-3">
                                <p className={styles.answer}>
                                    You can track your order by clicking the tracking link in your
                                    shipping confirmation email, or by logging into your account on
                                    our website and viewing the order details.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* <div className={styles.faq}>
                        <button
                            className={styles.faq_btn}
                            onClick={() => toggleTab(4)}
                        >
                            <span className={styles.faq_question}>
                                How do I contact customer support?
                            </span>
                            {activeTab === 4 ? (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            )}
                        </button>
                        {activeTab === 4 && (
                            <div className="mt-3">
                                <p className={styles.answer}>
                                    You can contact our customer support team by emailing us at
                                    support@myecommercestore.com, or by calling us at (555) 123-4567
                                    between the hours of 9am and 5pm EST, Monday through Friday.
                                </p>
                            </div>
                        )}
                    </div> */}

                    <div className={styles.faq}>
                        <button
                            className={styles.faq_btn}
                            onClick={() => toggleTab(5)}
                        >
                            <span className={styles.faq_question}>
                                Can I change or cancel my order?
                            </span>
                            {activeTab === 5 ? (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            )}
                        </button>
                        {activeTab === 5 && (
                            <div className="mt-3">
                                <p className={styles.answer}>
                                    Unfortunately, once an order has been placed, we are not able to
                                    make changes or cancellations. If you no longer want the items
                                    you've ordered, you can return them for a refund within 30 days
                                    of delivery.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className={styles.faq}>
                        <button
                            className={styles.faq_btn}
                            onClick={() => toggleTab(6)}
                        >
                            <span className={styles.faq_question}>
                                Do you offer international shipping?
                            </span>
                            {activeTab === 6 ? (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            )}
                        </button>
                        {activeTab === 6 && (
                            <div className="mt-3">
                                <p className={styles.answer}>
                                    Currently, Not.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* <div className={styles.faq}>
                        <button
                            className={styles.faq_btn}
                            onClick={() => toggleTab(7)}
                        >
                            <span className={styles.faq_question}>
                                What payment methods do you accept?
                            </span>
                            {activeTab === 7 ? (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className={styles.svg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            )}
                        </button>
                        {activeTab === 7 && (
                            <div className="mt-3">
                                <p className={styles.answer}>
                                    We accept visa,mastercard,paypal payment method also we have
                                    cash on delivery system.
                                </p>
                            </div>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default FAQ