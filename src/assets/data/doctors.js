import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

export const doctors = [
  {
    id: "01",
    name: "Dr. Michael Rodriguez",
    specialization: "Cardiologist",
    avgRating: 4.9,
    totalRating: 320,
    photo: doctorImg01, // Update with the correct image source
    totalPatients: 1800,
    hospital: "HeartCare Medical Center, New York",
  },
  {
    id: "02",
    name: "Dr. Nathan Miller",
    specialization: "Orthopedic Surgeon",
    avgRating: 4.7,
    totalRating: 210,
    photo: doctorImg02, // Update with the correct image source
    totalPatients: 1200,
    hospital: "OrthoCare Hospital, Los Angeles",
  },
  {
    id: "03",
    name: "Dr. William Davis",
    specialization: "Pediatrician",
    avgRating: 4.6,
    totalRating: 180,
    photo: doctorImg03, // Update with the correct image source
    totalPatients: 1000,
    hospital: "KidsWell Clinic, Chicago",
  },
];

