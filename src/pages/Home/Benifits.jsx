import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from "./accordion.module.css";
import placeholder4 from "../../assets/images/placeholder 4.png"

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={
            <>
                {header}
                <svg className={`size-6 ${styles.chevron}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </>
        }
        className={styles.item}
        buttonProps={{
            className: ({ isEnter }) =>
                `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
        }}
        contentProps={{ className: styles.itemContent }}
        panelProps={{ className: styles.itemPanel }}
    />
);

function Benifits() {
    return (
        <div className="bg-[#fefefe] text-black py-20 xl:pt-32">

            <div className='w-10/12 max-w-7xl mx-auto grid lg:grid-cols-2 items-center justify-between gap-8 min-h-[570px]'>

                <div className='md:max-lg:hidden'>
                    <img className='w-full object-cover' src={placeholder4} alt="A bearded man wearing glasses sits at a table, working on a laptop" />
                </div>

                <div className='md:max-lg:col-span-2'>
                    <Accordion className='w-full' transition transitionTimeout={250}>
                        <AccordionItem initialEntered header={<p>1. How can I register for an event?</p>}>
                            You can register online by visiting our event page, selecting your preferred event, and completing the registration form. You'll receive a confirmation email with event details after successful registration. For in-person assistance, visit our registration desk at the venue during operating hours.
                        </AccordionItem>

                        <AccordionItem header={<p>2. Are tickets refundable if I can't attend?</p>}>
                            Tickets are refundable up to 14 days before the event date, minus a 10% processing fee. Within 14 days, tickets are non-refundable but can be transferred to another person by contacting our support team. Special circumstances may be considered on a case-by-case basis.
                        </AccordionItem>

                        <AccordionItem header={<p>3. Will there be networking opportunities?</p>}>
                            Yes! We've designed multiple networking sessions including morning coffee meetups, structured speed networking, and evening social mixers. The event app will help you connect with other attendees, and we'll have dedicated networking lounges throughout the venue.
                        </AccordionItem>

                        <AccordionItem header={<p>4. Do you offer virtual or hybrid event options?</p>}>
                            We offer both fully virtual attendance options and hybrid experiences for most events. Virtual participants get live-streamed keynotes, breakout room access, and digital networking tools. Check individual event pages for specific hybrid offerings.
                        </AccordionItem>

                        <AccordionItem header={<p>5. Can I become a speaker at one of your events?</p>}>
                            We welcome speaker proposals! Submit your topic, bio, and speaking samples through our 'Call for Speakers' page. Our review committee evaluates submissions quarterly. Emerging thought leaders are encouraged to apply for our lightning talk sessions.
                        </AccordionItem>

                        <AccordionItem header={<p>6. Is there a dress code for the events?</p>}>
                            Our events are business casual unless otherwise specified for special evenings. Comfort is key - many attendees wear smart casual outfits that balance professionalism with conference-floor comfort. We recommend layers as venue temperatures vary.
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>


        </div>
    )
}

export default Benifits