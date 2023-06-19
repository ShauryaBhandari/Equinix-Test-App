import { useState } from "react";
import ServiceProvider from "./ServiceProvider";
import Search from "./Search";
import WeatherSearch from "./WeatherSearch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line to import Bootstrap styles

const providers = [
  { name: "A", location: "Location A", rating: 4.5, pincode: "12345" },
  { name: "B", location: "Location B", rating: 3.8, pincode: "23456" },
  { name: "C", location: "Location C", rating: 4.2, pincode: "34567" },
  { name: "D", location: "Location D", rating: 4.7, pincode: "45678" },
  { name: "E", location: "Location E", rating: 3.9, pincode: "56789" },
  { name: "F", location: "Location F", rating: 3.6, pincode: "67890" },
  { name: "G", location: "Location G", rating: 2.7, pincode: "78901" },
  { name: "H", location: "Location H", rating: 4.1, pincode: "89012" },
  { name: "I", location: "Location I", rating: 3.5, pincode: "90123" },
  { name: "J", location: "Location J", rating: 4.3, pincode: "01234" },
  { name: "K", location: "Location K", rating: 3.7, pincode: "34567" },
];

const App = () => {
  const [filteredProviders, setFilteredProviders] = useState(providers);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <div className="container py-5">
      {" "}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <Search
                providers={providers}
                setFilteredProviders={setFilteredProviders}
              />
              {filteredProviders.map((provider, index) => (
                <ServiceProvider key={index} provider={provider} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <WeatherSearch />
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <h1>Sample Form using React Hooks</h1>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
