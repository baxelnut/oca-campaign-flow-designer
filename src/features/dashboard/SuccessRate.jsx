import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SuccessRate() {
  const items = [
    {
      leading: 'WhatsApp',
      title: 76.253,
      trailing: 'Messages',
      barpercentage: 60,
      color: {
        background: '#98E2B4',
        frontground: '#297837',
        barcolor: '#297837',
      },
      details: {
        blasting: {
          remaining: 62.358,
          title: 'Blasting',
        },
        instant: {
          remaining: 42.578,
          title: 'Instant Messages',
        },
        scheduler: {
          remaining: 19.781,
          title: 'Scheduler Messages',
        },
      },
    },
    {
      leading: 'Email',
      title: 50.769,
      trailing: 'Mails',

      barpercentage: 30,
      color: {
        background: '#F7427A',
        frontground: '#FFFFFF',
        barcolor: '#FFA500',
      },
      details: {
        blasting: {
          remaining: 84.763,
          title: 'Blasting',
        },
        instant: {
          remaining: 50.496,
          title: 'Instant Messages',
        },
        scheduler: {
          remaining: 34.267,
          title: 'Scheduler Messages',
        },
      },
    },
  ];

  const loadContent = () => {
    return items.map((item, index) => {
      return (
        <>
          <div key={index} className="success-rate">
            <div>
              <p
                className="leading"
                style={{
                  background: item.color.background,
                  color: item.color.frontground,
                }}
              >
                {item.leading}
              </p>
              <h2 className="title">{item.title.toString()}</h2>
              <p className="trailing">{item.trailing}</p>
            </div>
            <div
              className="bar"
              style={{
                stroke: item.color.barcolor,
              }}
            >
              <CircularProgressbar
                value={item.barpercentage}
                text={`${item.barpercentage}%`}
              />
            </div>
          </div>
        </>
      );
    });
  };

  const loadContentDetails = () => {
    return items.map((item, index) => {
      return (
        <div className="group">
          <div
            className="details"
            key={index}
            style={{
              background: '#BA0E44',
            }}
          >
            <h2>{item.details.blasting.remaining}</h2>
            <p>{item.details.blasting.title}</p>
          </div>
          <div
            className="details mid"
            key={index}
            style={{
              background: '#2F80ED',
            }}
          >
            <h2>{item.details.scheduler.remaining}</h2>
            <p>{item.details.scheduler.title}</p>
          </div>
          <div
            className="details"
            key={index}
            style={{
              background: '#35B86D',
            }}
          >
            <h2>{item.details.instant.remaining}</h2>
            <p>{item.details.instant.title}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="success">
      <h2>Success Rate</h2>
      <div className="container">{loadContent()}</div>
      <div className="container-details">{loadContentDetails()}</div>
    </div>
  );
}
