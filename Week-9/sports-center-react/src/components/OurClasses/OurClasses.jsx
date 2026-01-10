import { useState } from 'react';

function OurClasses() {
  const [activeClass, setActiveClass] = useState('yoga');

  const classesData = {
    yoga: {
      title: 'Why are your Yoga?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.',
      scheduleTitle: 'When comes Yoga Your Time.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm'
      ],
      image: '/assets/yoga.jpg'
    },
    group: {
      title: 'Why are your Group Training?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.',
      scheduleTitle: 'When comes Group Training Your Time.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm'
      ],
      image: '/assets/group.webp'
    },
    solo: {
      title: 'Why are your Solo Sessions?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.',
      scheduleTitle: 'When comes Solo Training Your Time.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm'
      ],
      image: '/assets/solo.jpg'
    },
    stretching: {
      title: 'Flexibility & Stretching',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.',
      scheduleTitle: 'When comes Stretching Your Time.',
      schedule: [
        'Monday-Friday: 12:00pm - 1:00pm',
        'Wednesday-Friday: 7:00pm - 8:00pm',
        'Sunday: 10:00am - 11:00am'
      ],
      image: '/assets/stret.webp'
    }
  };

  return (
    <section className="our-classes" id="our-classes">
      <div className="max-width">
        <ClassHeader />
        <ClassButtons activeClass={activeClass} setActiveClass={setActiveClass} />
        <div className="our-classes-first-div">
          <ClassContent data={classesData[activeClass]} />
          <ClassImage src={classesData[activeClass].image} alt={activeClass} />
        </div>
      </div>
    </section>
  );
}

function ClassHeader() {
  return (
    <>
      <h1>OUR CLASSES</h1>
      <p className="our-classes-first-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga a fugiat similique. Numquam, explicabo ea.
      </p>
    </>
  );
}

function ClassButtons({ activeClass, setActiveClass }) {
  const classes = ['yoga', 'group', 'solo', 'stretching'];
  const classLabels = {
    yoga: 'Yoga',
    group: 'Group',
    solo: 'Solo',
    stretching: 'Stretching'
  };

  return (
    <nav>
      {classes.map((className) => (
        <button
          key={className}
          className={activeClass === className ? 'active' : ''}
          onClick={() => setActiveClass(className)}
        >
          {classLabels[className]}
        </button>
      ))}
    </nav>
  );
}

function ClassContent({ data }) {
  return (
    <div>
      <article className="active">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <h3>{data.scheduleTitle}</h3>
        {data.schedule.map((time, index) => (
          <p key={index}>{time}</p>
        ))}
      </article>
    </div>
  );
}

function ClassImage({ src, alt }) {
  return <img src={src} alt={alt} />;
}

export default OurClasses;