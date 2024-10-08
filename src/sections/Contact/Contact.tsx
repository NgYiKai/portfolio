import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className='text-center md:min-h-[80vh] py-16'>
      <p className="text-center text-gray-600 mb-2">Get In Touch</p>
      <h1 className="sectionTitle">Contact Me</h1>
      <form action="https://formspree.io/f/xrbzzjpe" method="post" className={styles.form}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
