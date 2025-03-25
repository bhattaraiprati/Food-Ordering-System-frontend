import React, { useState } from 'react'

const AccountProfile = () => {

    const [profileData, setProfileData] = useState({
      firstName: "Pratik",
      lastName: "Bhattarai",
      phoneNumber: "9843411801",
      email: "pratikb957@gmail.com",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProfileData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSave = () => {
      setIsLoading(true);

      // Simulating API call
      setTimeout(() => {
        setIsLoading(false);
        alert("Your profile has been updated successfully."); // Replace toast with alert
      }, 1000);
    };

    const handleCancel = () => {
      // Reset to original values
      setProfileData({
        firstName: "Pratik",
        lastName: "Bhattarai",
        phoneNumber: "9843411801",
        email: "pratikb957@gmail.com",
      });
      console.log("Cancelled edits");
    };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto fade-in">
        {/* Profile Picture Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-400 mb-1">
            PROFILE PICTURE
          </h2>
          <div className="flex items-center justify-center md:justify-start">
            <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">P</span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              FIRSTNAME
            </label>
            <input
              id="firstName"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
              disabled
              className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:border-[#ffb700]"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              LASTNAME
            </label>
            <input
              id="lastName"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
              disabled
              className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:border-[#ffb700]"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              PHONE NUMBER
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleInputChange}
                disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none  focus:ring-1 focus:ring-[#ffb700] focus:border-[#ffb700]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:border-[#ffb700] bg-gray-100"
              disabled
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-[#ffb700] hover:bg-[#ffa600] text-white font-medium px-8 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:ring-offset-2 transition-colors"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>

          <button
            onClick={handleCancel}
            className="border border-gray-300 text-gray-500 bg-white hover:bg-gray-100 font-medium px-8 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AccountProfile