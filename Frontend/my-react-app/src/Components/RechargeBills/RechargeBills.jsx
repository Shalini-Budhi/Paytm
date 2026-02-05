import "./RechargeBills.css";

const services = [
  "Mobile Recharge",
  "Electricity Bill",
  "DTH Recharge",
  "Municipal Bill",
  "Water Bill",
  "Gas & Cylinder",
  "Loan EMI",
  "Insurance Premium",
  "Challan",
];

const RechargeBills = () => {
  return (
    <div className="bill-container">
      {services.map((item, i) => (
        <div className="bill-item" key={i}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default RechargeBills;

