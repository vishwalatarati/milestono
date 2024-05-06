import React, { useEffect, useState } from 'react';
import PropertyForm1 from './propertyform/PropertyForm1';
import PropertyForm2 from './propertyform/PropertyForm2';
import PropertyForm3 from './propertyform/PropertyForm3';
import { useNavigate } from 'react-router-dom';

const PropertyForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleStepInc = () => {
    setStep(step + 1);
  };

  const handleStepDec = () => {
    if(step<=1)
    {
      navigate("/")
    }
    setStep(step - 1);
  };

  useEffect(()=>{
    setStep(1);
  },[]);

  return (
    <>
      <div className='form-header'><span onClick={handleStepDec} className='back-button'>←</span> Milestono.com</div>
      {step === 3 ? (
        <PropertyForm3 />
      ) : step === 2 ? (
        <PropertyForm2 handleStepInc={handleStepInc} />
      ) : (
        <PropertyForm1 handleStepInc={handleStepInc} />
      )}
    </>
  );
};

export default PropertyForm;
