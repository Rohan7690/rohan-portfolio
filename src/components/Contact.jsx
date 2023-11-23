import { useState,useRef } from "react"
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import {EarthCanvas} from './canvas'
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading,setLoading] = useState(false);
  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({
      ...form,
      [name]:value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:'Rohan',
        from_email:form.email,
        to_email:'rohan7690kt@gmail.com',
        message:form.message,
      },import.meta.env.VITE_APP_EMAILJS_USER_ID)
      .then(()=>{
        setLoading(false);
        setForm({
          name:'',
          email:'',
          message:'',
        })
        alert('Message sent successfully !');
      }
      ).catch(()=>{
        setLoading(false);
        alert('Message not sent !');
      })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form ref={formRef} onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8">

        <label className="flex flex-col">
          <div className="flex flex-col gap-2">
            <span >Your Name</span>
            <input
             onChange={handleChange} placeholder="What is your name ?" 
             value={form.name} type="text" name="name" id="name" 
             className="bg-tertiary py-4 px-6 rounded-lg 
             placeholder:text-secondary font-medium outline-none" required/>
          </div>
        </label>
        <label className="flex flex-col">
          <div className="flex flex-col gap-2">
            <span >Your Email</span>
            <input
             onChange={handleChange} placeholder="What is your Email ?" 
             value={form.email} type="email" name="email" id="email" 
             className="bg-tertiary py-4 px-6 rounded-lg 
             placeholder:text-secondary font-medium outline-none" required/>
          </div>
        </label>
        <label className="flex flex-col">
          <div className="flex flex-col gap-2">
            <span >Your Message</span>
            <textarea rows={7}
             onChange={handleChange} placeholder="Write your message here" 
             value={form.message} type="text" name="message" id="message" 
             className="bg-tertiary py-4 px-6 rounded-lg 
             placeholder:text-secondary font-medium outline-none" required />
          </div>
        </label>
          <button type="submit" className="bg-tertiary text-white-100 py-2 px-4 rounded-lg font-medium">
          {loading?'Sending...':'Send'}</button>
      </form>
      </motion.div>

      <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact');


