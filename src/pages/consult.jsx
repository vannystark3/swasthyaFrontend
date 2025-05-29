import React, { useState, useEffect } from 'react';
// import jsPDF from 'jspdf';
import './Consult.css';

const questionSets = {
  Ortho: [
    { id: 1, text: 'Do you have joint pain?', options: ['Yes', 'No'] },
    { id: 2, text: 'Is there swelling or stiffness?', options: ['Yes', 'No'] },
    { id: 3, text: 'Are you having difficulty walking?', options: ['Yes', 'No'] },
    { id: 4, text: 'Thanks for your responses. A specialist will review them.', final: true }
  ],
  Gynae: [
    { id: 1, text: 'Are you experiencing irregular periods?', options: ['Yes', 'No'] },
    { id: 2, text: 'Do you feel abdominal pain or cramps?', options: ['Yes', 'No'] },
    { id: 3, text: 'Any unusual discharge or discomfort?', options: ['Yes', 'No'] },
    { id: 4, text: 'Thanks for your responses. A specialist will review them.', final: true }
  ],
  Pediatric: [
    { id: 1, text: 'Are you having fever?', options: ['Yes', 'No'] },
    { id: 2, text: 'Any signs of cough or cold?', options: ['Yes', 'No'] },
    { id: 3, text: 'Is the appetite reduced?', options: ['Yes', 'No'] },
    { id: 4, text: 'Thanks for your responses. A pediatrician will review them.', final: true }
  ],
  General: [
    { id: 1, text: 'Are you experiencing headache?', options: ['Yes', 'No'] },
    { id: 2, text: 'Do you feel nauseous or dizzy?', options: ['Yes', 'No'] },
    { id: 3, text: 'Do you have a high temperature?', options: ['Yes', 'No'] },
    { id: 4, text: 'Thank you. A general physician will review your condition.', final: true }
  ],
  Dermatologist: [
    { id: 1, text: 'Do you have skin rashes or redness?', options: ['Yes', 'No'] },
    { id: 2, text: 'Is there any itching or irritation?', options: ['Yes', 'No'] },
    { id: 3, text: 'Do you have acne or pimples?', options: ['Yes', 'No'] },
    { id: 4, text: 'Thanks for the information. A dermatologist will check it soon.', final: true }
  ]
}; 

const patientInfo = {
  id: 'PT-10234',
  name: 'Aditya',
  age: 20,
  gender: 'Male',
  urgency: true 
};

const Consult = () => {
  const [messages, setMessages] = useState([]);
  const [doctorType, setDoctorType] = useState(null);
  const [questionFlow, setQuestionFlow] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    setMessages([{ from: 'bot', text: `Hello ${patientInfo.name}, which type of doctor would you like to consult?` }]);
  }, []);

  const handleDoctorChoice = (type) => {
    setDoctorType(type);
    setResponses(prev => ({ ...prev, 'Doctor Type': type }));
    setQuestionFlow(questionSets[type]);
    setMessages(prev => [
      ...prev,
      { from: 'user', text: type },
      { from: 'bot', text: questionSets[type][0].text }
    ]);
    setCurrentQIndex(0);
  };

  const handleAnswer = (answer) => {
    const currentQuestion = questionFlow[currentQIndex];
    setResponses(prev => ({ ...prev, [currentQuestion.text]: answer }));
    setMessages(prev => [...prev, { from: 'user', text: answer }]);

    const nextIndex = currentQIndex + 1;
    if (nextIndex < questionFlow.length) {
      const nextQuestion = questionFlow[nextIndex];
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'bot', text: nextQuestion.text }]);
        setCurrentQIndex(nextIndex);
      }, 500);
    }
  };

  // const generatePDFReport = () => {
  //   const doc = new jsPDF();
  //   const date = new Date().toLocaleString();

  //   doc.setFontSize(18);
  //   doc.text('Patient Symptom Report', 20, 20);

  //   doc.setFontSize(12);
  //   doc.text(`Generated on: ${date}`, 20, 28);

  //   doc.setFontSize(14);
  //   doc.text('Patient Information:', 20, 40);

  //   doc.setFontSize(12);
  //   doc.text(`Patient ID: ${patientInfo.id}`, 20, 48);
  //   doc.text(`Name: ${patientInfo.name}`, 20, 56);
  //   doc.text(`Age: ${patientInfo.age}`, 20, 64);
  //   doc.text(`Gender: ${patientInfo.gender}`, 20, 72);
  //   doc.text(`Urgency Status: ${patientInfo.urgency ? 'Urgent' : 'Not Urgent'}`, 20, 80);
  //   doc.text(`Consulted Doctor Type: ${doctorType}`, 20, 88);

  //   doc.setFontSize(14);
  //   doc.text('Symptom Responses:', 20, 100);

  //   let y = 110;
  //   Object.entries(responses).forEach(([question, answer], i) => {
  //     doc.setFontSize(12);
  //     doc.text(`${i + 1}. ${question} : ${answer}`, 20, y);
  //     y += 10;
  //     if (y > 270) {
  //       doc.addPage();
  //       y = 20;
  //     }
  //   });

  //   doc.setFontSize(10);
  //   doc.text("Note: This is a preliminary symptom report. Please consult a healthcare provider for clinical evaluation.", 20, y + 10);

  //   doc.save(`${patientInfo.name.replace(" ", "_")}_report.pdf`);
  // };

  const currentQuestion = doctorType && questionFlow[currentQIndex];

  return (
    <div className="consult-container">
      <div className="chat-box">
        <div className="chat-header">Swasthya Bot <span className="status-dot" /></div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.from}`}>{msg.text}</div>
          ))}
        </div>

        <div className="chat-input">
          {!doctorType ? (
            <div className="options-container">
              {Object.keys(questionSets).map((type, i) => (
                <button key={i} onClick={() => handleDoctorChoice(type)}>{type}</button>
              ))}
            </div>
          ) : currentQuestion && !currentQuestion.final ? (
            <div className="options-container">
              {currentQuestion.options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(opt)}>{opt}</button>
              ))}
            </div>
          ) : (
            <div className="download-btn">
              <button onClick={generatePDFReport}>Download Report as PDF</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Consult;
