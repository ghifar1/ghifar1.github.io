import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { profilImage } from './images';
import Card from './components/Card';
import { dataExperiences, dataSkills } from './data';
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

  useEffect(() => {
    setSkills(dataSkills)
    setExperiences(dataExperiences)
  }, [])

  return (
    <div className="bg-mYou-neutral-10">
      <div className='flex flex-wrap justify-center items-center py-10 px-12 gap-10'>
        <div>
          <img src={profilImage} />
        </div>
        <div className='text-mYou-primary-100 font-roboto'>
          <p className='font-semibold text-4xl md:text-6xl'>Muhammad Al Ghifari</p>
          <p>Backend & Frontend Web Developer</p>
          <div className='flex gap-2'>
            <a href='https://www.linkedin.com/in/muhammad-al-ghifari-aab584179/'>LinkedIn</a>
            <p>&#9702;</p>
            <a href='https://www.linkedin.com/in/muhammad-al-ghifari-aab584179/'>Github</a>
          </div>

        </div>
      </div>

      {/*create flex stack */}
      <div className='flex flex-col justify-center items-center py-10 px-5 gap-10'>
        <Card title='Skills'>
          <div className='flex flex-wrap gap-20 text-mYou-error-30 font-medium'>
            <div>
              <p className='text-xl mb-5'>Languages: </p>
              {skills?.languages?.map((lang) => (
                <div className='flex flex-col gap-10'>
                  <div className='flex gap-5 my-1'>
                    <img src={lang.logo} className="w-7" />
                    <p>{lang.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className='text-xl mb-5'>Frameworks: </p>
              {skills?.frameworks?.map((lang) => (
                <div className='flex flex-col gap-10'>
                  <div className='flex gap-5 my-1'>
                    <img src={lang.logo} className="w-7" />
                    <p>{lang.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className='text-xl mb-5'>Databases: </p>
              {skills?.databases?.map((lang) => (
                <div className='flex flex-col gap-10'>
                  <div className='flex gap-5 my-1'>
                    <img src={lang.logo} className="w-7" />
                    <p>{lang.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className='text-xl mb-5'>Others: </p>
              {skills?.others?.map((lang) => (
                <div className='flex flex-col gap-10'>
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
            {experiences?.experiences?.map((exp) => (
              <div className='flex flex-col gap-0'>
                <div className='flex gap-5 items-center my-1'>
                  <p className='text-xl font-medium text-mYou-error-30'>{exp.title}</p>
                  <p className='text-mYou-error-30 text-sm'>{exp.type}</p>
                </div>
                <div className='flex gap-3'>
                  <p className='text-mYou-error-30'>{exp.company}</p>
                  <p>{exp.start_month} - {exp.end_month}</p>
                </div>
                <hr className='my-5'/>
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
