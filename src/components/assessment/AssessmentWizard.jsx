import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight as ArrowRight, FiArrowLeft as ArrowLeft, FiCheck as Check } from 'react-icons/fi';


const assessmentSteps = [
  {
    id: 1,
    title: "Company Information",
    fields: [
      { name: "companyName", label: "Company Name", type: "text", required: true },
      { name: "industry", label: "Industry", type: "text", required: true },
      { name: "country", label: "Country", type: "text", required: true }
    ]
  },
  {
    id: 2,
    title: "Company Size",
    field: "companySize",
    type: "single",
    options: ["1-50", "51-200", "201-1000", "1000+"]
  },
  {
    id: 3,
    title: "Current Technology",
    field: "services",
    type: "multi",
    options: ["Oracle ERP", "Oracle Fusion", "Oracle EBS", "NetSuite", "Salesforce", "SAP", "Microsoft Dynamics", "AWS", "Azure", "Google Cloud", "Workday", "ServiceNow", "Custom ERP", "Other"]
  },
  {
    id: 4,
    title: "Business Challenges",
    field: "challenges",
    type: "multi",
    options: ["Manual Processes", "Legacy Systems", "Poor Reporting", "High Costs", "Data Silos", "Customer Experience", "Compliance", "Security", "Low Productivity", "Integration Problems", "Slow Approvals", "Other"]
  },
  {
    id: 5,
    title: "Transformation Goals",
    field: "goals",
    type: "multi",
    options: ["Reduce Costs", "Increase Revenue", "Move to Cloud", "Modernize ERP", "Improve CRM", "AI Automation", "Business Intelligence", "Improve Customer Experience", "Improve Security", "Digital Transformation", "Scale Operations"]
  },
  {
    id: 6,
    title: "AI Interest",
    field: "aiInterest",
    type: "multi",
    options: ["AI Chatbots", "AI Agents", "Predictive Analytics", "Document AI", "AI Copilots", "Knowledge Assistant", "Process Automation", "Computer Vision", "Generative AI", "Recommendation Engine", "Custom AI"]
  },
  {
    id: 7,
    title: "Cloud Readiness",
    fields: [
      { name: "cloudProvider", label: "Current Cloud Provider", type: "select", options: ["None (On-Premise)", "AWS", "Azure", "Google Cloud", "Hybrid"], required: true },
      { name: "cloudPlans", label: "Cloud Migration Timeline", type: "select", options: ["Already on Cloud", "Within 6 Months", "1-2 Years", "No current plans"], required: true }
    ]
  },
  {
    id: 8,
    title: "Timeline",
    field: "timeline",
    type: "single",
    options: ["Immediately", "1 Month", "3 Months", "6 Months", "12 Months", "Just Exploring"]
  },
  {
    id: 9,
    title: "Budget",
    field: "budget",
    type: "single",
    options: ["Under £10k", "£10k–£50k", "£50k–£100k", "£100k–£500k", "£500k+", "Not Decided"]
  },
  {
    id: 10,
    title: "Contact Details",
    fields: [
      { name: "contactName", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Business Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: false }
    ]
  }
];

const AssessmentWizard = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');

  const handleNext = () => {
    setError('');
    const stepConfig = assessmentSteps[currentStep];
    
    // Validation
    if (stepConfig.fields) {
      for (let f of stepConfig.fields) {
        if (f.required && (!formData[f.name] || formData[f.name].trim() === '')) {
          setError(`Please fill out the required field: ${f.label}`);
          return;
        }
      }
    } else if (stepConfig.type === 'single' || stepConfig.type === 'multi') {
      const val = formData[stepConfig.field];
      if (!val || (Array.isArray(val) && val.length === 0)) {
        setError(`Please select at least one option to continue.`);
        return;
      }
    }

    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onSubmit(formData);
    }
  };

  const handleBack = () => {
    setError('');
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleChange = (name, value) => {
    setError('');
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (field, option) => {
    setError('');
    setFormData(prev => {
      const current = prev[field] || [];
      const updated = current.includes(option)
        ? current.filter(item => item !== option)
        : [...current, option];
      return { ...prev, [field]: updated };
    });
  };

  const step = assessmentSteps[currentStep];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col pt-24 pb-12 px-6 sm:px-12">
      {/* Progress Bar */}
      <div className="w-full max-w-4xl mx-auto mb-16">
        <div className="flex justify-between text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
          <span>Step {currentStep + 1} of {assessmentSteps.length}</span>
          <span>{Math.round(((currentStep + 1) / assessmentSteps.length) * 100)}% Completed</span>
        </div>
        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#E28B2B] to-orange-400"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / assessmentSteps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-12">{step.title}</h2>

            {/* Render Fields */}
            {step.fields && (
              <div className="flex flex-col gap-8 max-w-2xl">
                {step.fields.map(f => (
                  <div key={f.name} className="flex flex-col">
                    <label className="text-sm text-gray-500 uppercase tracking-wide mb-3">
                      {f.label} {f.required && <span className="text-red-500">*</span>}
                    </label>
                    {f.type === 'select' ? (
                      <select 
                        className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-black transition-colors duration-300 focus:outline-none focus:border-[#E28B2B] appearance-none"
                        value={formData[f.name] || ''}
                        onChange={(e) => handleChange(f.name, e.target.value)}
                      >
                        <option value="">Select an option</option>
                        {f.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input 
                        type={f.type}
                        className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-black transition-colors duration-300 focus:outline-none focus:border-[#E28B2B] placeholder:text-gray-400"
                        placeholder={`Enter your ${f.label.toLowerCase()}`}
                        value={formData[f.name] || ''}
                        onChange={(e) => handleChange(f.name, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Render Multi/Single Select Pills */}
            {(step.type === 'multi' || step.type === 'single') && (
              <div className="flex flex-wrap gap-4">
                {step.options.map(opt => {
                  const isSelected = step.type === 'multi' 
                    ? (formData[step.field] || []).includes(opt)
                    : formData[step.field] === opt;
                  
                  return (
                    <button
                      key={opt}
                      onClick={() => step.type === 'multi' ? handleMultiSelect(step.field, opt) : handleChange(step.field, opt)}
                      className={`px-6 py-4 rounded-full border border-gray-200 bg-gray-50 text-gray-500 transition-all duration-300 flex items-center gap-3 text-lg cursor-pointer hover:border-gray-300 hover:text-black ${isSelected ? '!border-[#E28B2B] !bg-[#E28B2B]/10 !text-black font-medium' : ''}`}
                    >
                      <span>{opt}</span>
                      {isSelected && <Check className="w-5 h-5 text-[#E28B2B]" />}
                    </button>
                  );
                })}
              </div>
            )}
            
            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-red-500 text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between mt-12">
        <button 
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-lg font-medium text-gray-500 transition-colors duration-300 bg-transparent border-none cursor-pointer hover:text-black disabled:opacity-0 disabled:pointer-events-none"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <button 
          onClick={handleNext}
          className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-md border-none cursor-pointer hover:bg-gray-800 hover:shadow-xl"
        >
          <span>{currentStep === assessmentSteps.length - 1 ? 'Submit Assessment' : 'Next Step'}</span>
          {currentStep !== assessmentSteps.length - 1 && <ArrowRight className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default AssessmentWizard;
