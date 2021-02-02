import SettingsSvg from "./SettingsSvg";

const SettingsButton = () => {
  return (
    <button
      type="button"
      id="settings"
      onClick="toggleBox('modal', 'modalSlide', 'modalBox', '130%')"
    >
      <SettingsSvg />
    </button>
  );
};

export default SettingsButton;
