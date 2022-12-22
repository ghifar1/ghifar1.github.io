import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import { profilImage, upIcon } from './images';
import Card from './components/Card';
import { dataExperiences, dataSkills } from './data';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
type SkillComponent = {
  name: string
  logo: string
}

type Skills = {
  languages: SkillComponent[]
  frameworks: SkillComponent[]
  databases: SkillComponent[]
  others: SkillComponent[]
}

type ExpComponent = {
  title: string
  type: string
  company: string
  start_month: string
  end_month: string
  description: string
}

type Experience = {
  experiences: ExpComponent[]
}

function App() {
  const [skills, setSkills] = useState<Skills>({} as Skills)
  const [experiences, setExperiences] = useState<Experience>({} as Experience)
  const [topButton, setTopButton] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggle = () => {
    if (window.scrollY > 100) {
      setTopButton(true)
    } else {
      setTopButton(false)
    }
  }

  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0)
  })
  // window.addEventListener('scroll', toggle)

  useEffect(() => {
    setSkills(dataSkills)
    setExperiences(dataExperiences)
  }, [])

  const buttonRef = useRef(null)
  const profileRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        // markers: true
      },
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power2.out"
    })

    // scroll trigger for profile
    // move to center of screen, if scrolled then move to top
    gsap.to(profileRef.current, {
      scrollTrigger: {
        trigger: profileRef.current,
        start: "top 0%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse",
        // markers: true
      },
      opacity: 0,
      y: 100,
      duration: 0.5,
    })

  }, [])

  return (
    <div className="relative bg-mYou-neutral-10">
      <div ref={buttonRef} onClick={scrollToTop} className={"fixed" + (!topButton ? ' hidden ' : ' ') + "bottom-10 right-10 w-16 h-16 bg-mYou-error-90 text-mYou-primary-100 rounded-[16px] border border-mYou-error-30 shadow-lg"}>
        <div className='flex justify-center items-center w-full h-full'>
          <img src={upIcon} />
        </div>
      </div>
      <div ref={profileRef} className='flex flex-wrap justify-center items-center py-10 px-12 gap-10'>
        <div>
          <img src={profilImage} />
        </div>
        <div className='text-mYou-primary-100 font-roboto'>
          <p className='font-semibold text-4xl md:text-6xl'>Muhammad Al Ghifari</p>
          <p>Backend & Frontend Web Developer</p>
          <div className='flex gap-2'>
            <a className='underline' href='https://www.linkedin.com/in/muhammad-al-ghifari-aab584179/'>LinkedIn</a>
            <p>&#9702;</p>
            <a className='underline' href='https://github.com/ghifar1'>Github</a>
            <p>&#9702;</p>
            <a className='underline' href='mailto:muhamadalghifari97@gmail.com'>Email</a>
          </div>

        </div>
      </div>

      {/*create flex stack */}
      <div className='profile flex flex-col justify-center items-center py-10 px-5 gap-10'>
        <Card title='Skills'>
          <div className='flex flex-wrap gap-12 text-mYou-error-30 font-medium'>
            <div>
              <p className='text-xl mb-5'>Languages: </p>
              {skills?.languages?.map((lang, idx) => (
                <div key={idx} className='flex flex-col gap-10'>
                  <div className='flex gap-5 my-1'>
                    <img src={lang.logo} className="w-7" />
                    <p>{lang.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className='text-xl mb-5'>Frameworks: </p>
              {skills?.frameworks?.map((lang, idx) => (
                <div key={idx} className='flex flex-col gap-10'>
                  <div className='flex gap-5 my-1'>
                    <img src={lang.logo} className="w-7" />
                    <p>{lang.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className='text-xl mb-5'>Databases: </p>
              {skills?.databases?.map((lang, idx) => (
                <div key={idx} className='flex flex-col gap-10'>
                  <div className='flex gap-5 my-1'>
                    <img src={lang.logo} className="w-7" />
                    <p>{lang.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className='text-xl mb-5'>Others: </p>
              {skills?.others?.map((lang, idx) => (
                <div key={idx} className='flex flex-col gap-10'>
                  <div className='flex gap-5 my-1'>
                    <img src={lang.logo} className="w-7" />
                    <p>{lang.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card title='Experience'>
          <div className='flex flex-col gap-5'>
            {experiences?.experiences?.map((exp, idx) => (
              <div key={idx} className='flex flex-col gap-0'>
                <div className='flex gap-5 items-center my-1'>
                  <p className='text-xl font-medium text-mYou-error-30'>{exp.title}</p>
                  <p className='text-mYou-error-30 text-sm'>{exp.type}</p>
                </div>
                <div className='flex gap-3'>
                  <p className='text-mYou-error-30'>{exp.company}</p>
                  <p>{exp.start_month} - {exp.end_month}</p>
                </div>
                <hr className='my-5' />
                <div>
                  <p className='text-mYou-error-30 whitespace-pre-wrap'>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

    </div>
  );
}

export default App;
