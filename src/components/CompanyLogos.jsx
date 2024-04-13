import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h5 className="tagline text-center mb-6 text-n-1/50">Helping people create beautiful content at</h5>
      <ul className="flex">
        {companyLogos.map((item, index) => (
          <li key={index} className="flex items-center justify-center h-[8.5rem] flex-1">
            <img src={item} width={134} height={28} alt={item} className="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
