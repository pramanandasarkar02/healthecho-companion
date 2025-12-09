import React, { useState } from "react";
import { 
  User, 
  Calendar, 
  HeartPulse, 
  Weight, 
  FileText, 
  ChevronDown, 
  ChevronUp,
  Activity,
  TrendingUp,
  TrendingDown,
  Thermometer,
  Droplets,
  Brain,
  Bed,
  Pill,
  Stethoscope,
  Watch,
  Users,
  MapPin,
  Briefcase,
  Smartphone,
  Mail,
  // BloodPressure,
  // Glucose,
  // Cholesterol
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart
} from 'recharts';

// Comprehensive patient data
const patient = {
  // Personal Information
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: "1985-07-04",
  gender: "Male",
  age: 38,
  bloodType: "O+",
  height: "175 cm",
  weight: 56.4,
  bmi: 18.4,
  
  // Contact Information
  address: "123 Health Street, Medical City, MC 12345",
  phone: "+1 (555) 123-4567",
  email: "john.doe@email.com",
  emergencyContact: "Jane Doe (Spouse) - +1 (555) 987-6543",
  
  // Demographic Information
  maritalStatus: "Married",
  occupation: "Software Engineer",
  employmentStatus: "Full-time",
  education: "Master's Degree",
  ethnicity: "Caucasian",
  primaryLanguage: "English",
  religion: "Non-denominational",
  
  // Medical Information
  primaryPhysician: "Dr. Sarah Miller",
  insuranceProvider: "HealthPlus Insurance",
  policyNumber: "HP-78901234",
  lastCheckup: "2024-07-12",
  nextAppointment: "2024-09-15",
  
  // Health Metrics
  bloodPressure: "118/76",
  heartRate: 72,
  respiratoryRate: 16,
  temperature: 36.8,
  oxygenSaturation: 98,
  
  // Lab Results
  glucose: 95,
  cholesterolTotal: 180,
  cholesterolLDL: 100,
  cholesterolHDL: 55,
  triglycerides: 120,
  hemoglobin: 14.5,
  
  // Conditions & Medications
  chronicConditions: ["Mild Hypertension", "Seasonal Allergies"],
  currentMedications: [
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", for: "Blood Pressure" },
    { name: "Loratadine", dosage: "10mg", frequency: "As needed", for: "Allergies" }
  ],
  allergies: ["Penicillin", "Peanuts"],
  surgeries: ["Appendectomy (2010)"],
  familyHistory: ["Father: Heart disease at 65", "Mother: Diabetes type 2"]
};

// Extended time-series data for various metrics
const healthData = {
  // Weight data (last 12 months)
  weight: [
    { date: "Aug '23", value: 58.2, month: 8, year: 2023 },
    { date: "Sep '23", value: 57.8, month: 9, year: 2023 },
    { date: "Oct '23", value: 57.5, month: 10, year: 2023 },
    { date: "Nov '23", value: 57.2, month: 11, year: 2023 },
    { date: "Dec '23", value: 56.9, month: 12, year: 2023 },
    { date: "Jan '24", value: 56.5, month: 1, year: 2024 },
    { date: "Feb '24", value: 56.2, month: 2, year: 2024 },
    { date: "Mar '24", value: 56.4, month: 3, year: 2024 },
    { date: "Apr '24", value: 56.8, month: 4, year: 2024 },
    { date: "May '24", value: 57.1, month: 5, year: 2024 },
    { date: "Jun '24", value: 56.9, month: 6, year: 2024 },
    { date: "Jul '24", value: 56.4, month: 7, year: 2024 },
  ],
  
  // Blood Pressure (Systolic/Diastolic)
  bloodPressure: [
    { date: "Jan '24", systolic: 125, diastolic: 82 },
    { date: "Feb '24", systolic: 122, diastolic: 80 },
    { date: "Mar '24", systolic: 120, diastolic: 78 },
    { date: "Apr '24", systolic: 118, diastolic: 76 },
    { date: "May '24", systolic: 119, diastolic: 77 },
    { date: "Jun '24", systolic: 118, diastolic: 76 },
    { date: "Jul '24", systolic: 118, diastolic: 76 },
  ],
  
  // Heart Rate
  heartRate: [
    { date: "Jan '24", value: 75 },
    { date: "Feb '24", value: 74 },
    { date: "Mar '24", value: 73 },
    { date: "Apr '24", value: 72 },
    { date: "May '24", value: 71 },
    { date: "Jun '24", value: 72 },
    { date: "Jul '24", value: 72 },
  ],
  
  // Glucose Levels
  glucose: [
    { date: "Jan '24", value: 102 },
    { date: "Feb '24", value: 98 },
    { date: "Mar '24", value: 95 },
    { date: "Apr '24", value: 97 },
    { date: "May '24", value: 96 },
    { date: "Jun '24", value: 95 },
    { date: "Jul '24", value: 95 },
  ],
  
  // Cholesterol Levels
  cholesterol: [
    { date: "Jan '24", total: 195, ldl: 115, hdl: 50, triglycerides: 130 },
    { date: "Apr '24", total: 185, ldl: 105, hdl: 53, triglycerides: 125 },
    { date: "Jul '24", total: 180, ldl: 100, hdl: 55, triglycerides: 120 },
  ],
  
  // Health Index (Composite Score)
  healthIndex: [
    { date: "Jan '24", value: 78, category: "Moderate" },
    { date: "Feb '24", value: 82, category: "Good" },
    { date: "Mar '24", value: 80, category: "Good" },
    { date: "Apr '24", value: 83, category: "Good" },
    { date: "May '24", value: 85, category: "Excellent" },
    { date: "Jun '24", value: 84, category: "Excellent" },
    { date: "Jul '24", value: 85, category: "Excellent" },
  ],
  
  // Lifestyle Metrics
  activity: [
    { date: "Jan '24", steps: 7542, activeMinutes: 45, calories: 2100 },
    { date: "Feb '24", steps: 8120, activeMinutes: 52, calories: 2250 },
    { date: "Mar '24", steps: 7890, activeMinutes: 48, calories: 2180 },
    { date: "Apr '24", steps: 8450, activeMinutes: 55, calories: 2300 },
    { date: "May '24", steps: 9010, activeMinutes: 60, calories: 2450 },
    { date: "Jun '24", steps: 8765, activeMinutes: 58, calories: 2380 },
    { date: "Jul '24", steps: 8920, activeMinutes: 59, calories: 2420 },
  ],
  
  // Sleep Data
  sleep: [
    { date: "Jan '24", duration: 6.5, quality: 75 },
    { date: "Feb '24", duration: 7.0, quality: 80 },
    { date: "Mar '24", duration: 6.8, quality: 78 },
    { date: "Apr '24", duration: 7.2, quality: 85 },
    { date: "May '24", duration: 7.5, quality: 88 },
    { date: "Jun '24", duration: 7.3, quality: 86 },
    { date: "Jul '24", duration: 7.4, quality: 87 },
  ]
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label, unit }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-800 mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.dataKey === 'value' || entry.dataKey === 'systolic' || entry.dataKey === 'diastolic' 
              ? (unit || '') 
              : entry.dataKey === 'steps' ? ' steps' 
              : entry.dataKey === 'duration' ? ' hrs' 
              : entry.dataKey === 'calories' ? ' kcal' 
              : entry.dataKey === 'activeMinutes' ? ' min' 
              : ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Color palette for charts
const chartColors = {
  weight: '#3b82f6',
  bloodPressureSystolic: '#ef4444',
  bloodPressureDiastolic: '#f97316',
  heartRate: '#10b981',
  glucose: '#8b5cf6',
  cholesterol: '#ec4899',
  healthIndex: '#06b6d4',
  activity: '#84cc16',
  sleep: '#6366f1'
};

const PatientProfilePage = () => {
  const [activeChart, setActiveChart] = useState('weight');
  const [timeRange, setTimeRange] = useState('12m');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const getChartData = () => {
    let data = healthData[activeChart];
    if (!data) return [];
    
    if (timeRange === '6m') {
      return data.slice(-6);
    } else if (timeRange === '3m') {
      return data.slice(-3);
    }
    return data;
  };

  const renderChart = () => {
    const data = getChartData();
    
    switch(activeChart) {
      case 'bloodPressure':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" />
              <YAxis label={{ value: 'mmHg', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="diastolic" fill={chartColors.bloodPressureDiastolic} opacity={0.6} />
              <Line type="monotone" dataKey="systolic" stroke={chartColors.bloodPressureSystolic} strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        );
        
      case 'cholesterol':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" />
              <YAxis label={{ value: 'mg/dL', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="total" fill={chartColors.cholesterol} name="Total Cholesterol" />
              <Bar dataKey="ldl" fill="#ef4444" name="LDL (Bad)" />
              <Bar dataKey="hdl" fill="#10b981" name="HDL (Good)" />
            </BarChart>
          </ResponsiveContainer>
        );
        
      case 'activity':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" label={{ value: 'Steps', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: 'Minutes', angle: 90, position: 'insideRight' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar yAxisId="left" dataKey="steps" fill={chartColors.activity} />
              <Line yAxisId="right" type="monotone" dataKey="activeMinutes" stroke="#f59e0b" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        );
        
      default:
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke={chartColors[activeChart] || '#3b82f6'}
                fill={chartColors[activeChart] || '#93c5fd'}
                fillOpacity={0.6}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        );
    }
  };

  const getChartTitle = () => {
    const titles = {
      weight: 'Body Weight Trend',
      bloodPressure: 'Blood Pressure Monitoring',
      heartRate: 'Heart Rate Trends',
      glucose: 'Blood Glucose Levels',
      cholesterol: 'Cholesterol Profile',
      healthIndex: 'Overall Health Index',
      activity: 'Physical Activity',
      sleep: 'Sleep Patterns'
    };
    return titles[activeChart] || 'Health Metrics';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl shadow-md">
                <User className="text-blue-600" size={40} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {patient.firstName} <span className="text-blue-600">{patient.lastName}</span>
                </h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Patient ID: MED-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {patient.bloodType}
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {patient.age} years
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Last Checkup</p>
              <p className="text-lg font-semibold text-gray-800">
                {new Date(patient.lastCheckup).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </p>
              <p className="text-sm text-blue-600 mt-1">
                Next: {new Date(patient.nextAppointment).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Demographic Information */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Vital Signs Dashboard */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Activity className="text-blue-500" />
                Vital Signs Dashboard
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-2 mb-2">
                    {/* <BloodPressure className="text-red-500" size={20} /> */}
                    <span className="text-sm font-semibold text-gray-700">Blood Pressure</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{patient.bloodPressure}</p>
                  <p className="text-xs text-gray-500 mt-1">mmHg</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-2xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <HeartPulse className="text-green-500" size={20} />
                    <span className="text-sm font-semibold text-gray-700">Heart Rate</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{patient.heartRate}</p>
                  <p className="text-xs text-gray-500 mt-1">bpm</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-2xl border border-purple-100">
                  <div className="flex items-center gap-2 mb-2">
                    {/* <Glucose className="text-purple-500" size={20} /> */}
                    <span className="text-sm font-semibold text-gray-700">Glucose</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{patient.glucose}</p>
                  <p className="text-xs text-gray-500 mt-1">mg/dL</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-white p-4 rounded-2xl border border-pink-100">
                  <div className="flex items-center gap-2 mb-2">
                    {/* <Cholesterol className="text-pink-500" size={20} /> */}
                    <span className="text-sm font-semibold text-gray-700">Cholesterol</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{patient.cholesterolTotal}</p>
                  <p className="text-xs text-gray-500 mt-1">mg/dL</p>
                </div>
              </div>
            </div>

            {/* Interactive Health Chart */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">
                  {getChartTitle()}
                </h2>
                
                <div className="flex flex-wrap gap-2">
                  {/* Time Range Selector */}
                  <div className="flex bg-gray-100 rounded-xl p-1">
                    {['3m', '6m', '12m'].map((range) => (
                      <button
                        key={range}
                        onClick={() => setTimeRange(range)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                          timeRange === range
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {range === '3m' ? '3 Months' : range === '6m' ? '6 Months' : '1 Year'}
                      </button>
                    ))}
                  </div>
                  
                  {/* Metric Selector */}
                  <div className="flex overflow-x-auto pb-2 gap-2">
                    {Object.keys(healthData).map((metric) => (
                      <button
                        key={metric}
                        onClick={() => setActiveChart(metric)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                          activeChart === metric
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {metric.charAt(0).toUpperCase() + metric.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="h-80">
                {renderChart()}
              </div>
              
              {/* Chart Legend */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {activeChart === 'bloodPressure' && (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>Systolic Pressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span>Diastolic Pressure</span>
                    </div>
                  </>
                )}
                {activeChart === 'cholesterol' && (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                      <span>Total Cholesterol</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>LDL (Bad)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>HDL (Good)</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Detailed Patient Information */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Patient Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Details */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <User size={18} />
                    Personal Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date of Birth</span>
                      <span className="font-medium">{new Date(patient.dateOfBirth).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gender</span>
                      <span className="font-medium">{patient.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Height / Weight</span>
                      <span className="font-medium">{patient.height} / {patient.weight} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">BMI</span>
                      <span className="font-medium">{patient.bmi} ({patient.bmi < 18.5 ? 'Underweight' : patient.bmi < 25 ? 'Normal' : 'Overweight'})</span>
                    </div>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <Mail size={18} />
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Address</span>
                      <span className="font-medium text-right">{patient.address}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone</span>
                      <span className="font-medium">{patient.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emergency Contact</span>
                      <span className="font-medium">{patient.emergencyContact}</span>
                    </div>
                  </div>
                </div>
                
                {/* Demographic Information */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <Users size={18} />
                    Demographic Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Marital Status</span>
                      <span className="font-medium">{patient.maritalStatus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Occupation</span>
                      <span className="font-medium">{patient.occupation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Education</span>
                      <span className="font-medium">{patient.education}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ethnicity</span>
                      <span className="font-medium">{patient.ethnicity}</span>
                    </div>
                  </div>
                </div>
                
                {/* Medical Information */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <Stethoscope size={18} />
                    Medical Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Primary Physician</span>
                      <span className="font-medium">{patient.primaryPhysician}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Insurance</span>
                      <span className="font-medium">{patient.insuranceProvider}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chronic Conditions</span>
                      <span className="font-medium">{patient.chronicConditions.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Health Summary & Alerts */}
          <div className="space-y-6">
            
            {/* Health Summary */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Health Summary</h2>
              
              <div className="space-y-4">
                {/* Health Score */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Overall Health Score</span>
                    <span className="text-2xl font-bold text-blue-600">85/100</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-blue-500" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-right">Excellent</p>
                </div>
                
                {/* Risk Assessment */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-700 mb-3">Risk Assessment</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cardiovascular</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Low Risk</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Diabetes</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Low Risk</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Hypertension</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">Medium Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medications & Allergies */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Pill size={20} />
                Current Medications
              </h2>
              
              <div className="space-y-4">
                {patient.currentMedications.map((med, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-xl">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-800">{med.name}</h4>
                        <p className="text-sm text-gray-600">{med.dosage} • {med.frequency}</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {med.for}
                      </span>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <h3 className="font-semibold text-gray-700 mb-2">Allergies</h3>
                  <div className="flex flex-wrap gap-2">
                    {patient.allergies.map((allergy, index) => (
                      <span key={index} className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Lab Results */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Lab Results</h2>
              
              <div className="space-y-3">
                {Object.entries({
                  'Hemoglobin': { value: patient.hemoglobin, unit: 'g/dL', normal: '13.5-17.5' },
                  'Glucose': { value: patient.glucose, unit: 'mg/dL', normal: '70-100' },
                  'Cholesterol Total': { value: patient.cholesterolTotal, unit: 'mg/dL', normal: '<200' },
                  'LDL': { value: patient.cholesterolLDL, unit: 'mg/dL', normal: '<100' },
                  'HDL': { value: patient.cholesterolHDL, unit: 'mg/dL', normal: '>40' },
                  'Triglycerides': { value: patient.triglycerides, unit: 'mg/dL', normal: '<150' }
                }).map(([test, data]) => {
                  const isNormal = 
                    test === 'HDL' ? data.value > 40 :
                    test === 'LDL' ? data.value < 100 :
                    test === 'Cholesterol Total' ? data.value < 200 :
                    test === 'Glucose' ? data.value >= 70 && data.value <= 100 :
                    test === 'Triglycerides' ? data.value < 150 : true;
                  
                  return (
                    <div key={test} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                      <div>
                        <span className="text-gray-700">{test}</span>
                        <p className="text-xs text-gray-500">Normal: {data.normal}</p>
                      </div>
                      <div className="text-right">
                        <span className={`font-semibold ${isNormal ? 'text-green-600' : 'text-red-600'}`}>
                          {data.value} {data.unit}
                        </span>
                        <p className="text-xs">
                          {isNormal ? 'Normal' : 'Abnormal'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <FileText size={18} />
                View Full Medical History
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Activity size={18} />
                Schedule New Test
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-100 to-white text-gray-800 font-semibold rounded-xl border border-gray-300 shadow-sm hover:shadow transition-all duration-300">
                <Stethoscope size={18} />
                Contact Physician
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Footer */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()} • Data refreshed every 24 hours</p>
          <p className="mt-1">For emergencies, call: 911 or visit nearest emergency room</p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfilePage;