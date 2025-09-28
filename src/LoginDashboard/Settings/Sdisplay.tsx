import { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { FiSettings, FiBell, FiShield, FiUser, FiDelete } from "react-icons/fi";
import Accordion from "./Accordion";
import Table from "./table";

export default function Sdisplay() {
  const [isRebillToggled, setIsRebillToggled] = useState(false);
  const [isSoundsToggled, setIsSoundsToggled] = useState(false);
  const [isVibrationsToggled, setIsVibrationsToggled] = useState(false);

  const handleRebillToggle = () => {
    setIsRebillToggled((prevState) => !prevState);
  };

  const handleSoundsToggle = () => {
    setIsSoundsToggled((prevState) => !prevState);
  };

  const handleVibrationsToggle = () => {
    setIsVibrationsToggled((prevState) => !prevState);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
            Settings
          </h1>
          <p className="text-neutral-600 text-lg">
            Manage your account preferences and security settings
          </p>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="card-premium p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary-100 rounded-xl">
              <FiUser className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-semibold text-neutral-900">
                Basic Information
              </h2>
              <p className="text-neutral-600">Update your personal details</p>
            </div>
          </div>

          <div className="lg:ml-8">
            <Accordion
              title="Basic Info"
              answer="Alex Vik"
              phone={289123242}
              birth={1980}
            />
          </div>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <div className="card-premium p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-secondary-100 rounded-lg">
              <FiBell className="w-5 h-5 text-secondary-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-neutral-900">
              Notifications
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 px-4 bg-neutral-50 rounded-lg">
              <span className="text-neutral-700 font-medium">
                Turn on rebill
              </span>
              <button
                className="text-2xl transition-colors duration-200 hover:scale-110"
                onClick={handleRebillToggle}
              >
                {isRebillToggled ? (
                  <FaToggleOn className="text-success-600" />
                ) : (
                  <FaToggleOff className="text-neutral-400" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between py-3 px-4 bg-neutral-50 rounded-lg">
              <span className="text-neutral-700 font-medium">
                Turn on sounds
              </span>
              <button
                className="text-2xl transition-colors duration-200 hover:scale-110"
                onClick={handleSoundsToggle}
              >
                {isSoundsToggled ? (
                  <FaToggleOn className="text-success-600" />
                ) : (
                  <FaToggleOff className="text-neutral-400" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between py-3 px-4 bg-neutral-50 rounded-lg">
              <span className="text-neutral-700 font-medium">
                Turn on vibrations
              </span>
              <button
                className="text-2xl transition-colors duration-200 hover:scale-110"
                onClick={handleVibrationsToggle}
              >
                {isVibrationsToggled ? (
                  <FaToggleOn className="text-success-600" />
                ) : (
                  <FaToggleOff className="text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="card-premium p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-error-100 rounded-lg">
              <FiShield className="w-5 h-5 text-error-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-neutral-900">
              Security
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 px-4 bg-neutral-50 rounded-lg">
              <span className="text-neutral-700 font-medium">
                Two-Factor Authentication
              </span>
              <button className="btn-outline text-sm px-4 py-2">Enable</button>
            </div>

            <div className="flex items-center justify-between py-3 px-4 bg-error-50 rounded-lg border border-error-200">
              <span className="text-error-700 font-medium">
                Delete payment history
              </span>
              <button className="flex items-center space-x-2 px-4 py-2 bg-error-600 hover:bg-error-700 text-white rounded-lg transition-colors duration-200">
                <FiDelete className="w-4 h-4" />
                <span className="text-sm">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="card-premium p-6 sm:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-accent-100 rounded-lg">
            <FiSettings className="w-5 h-5 text-accent-600" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-neutral-900">
            Advanced Settings
          </h3>
        </div>
        <Table />
      </div>
    </div>
  );
}
