import TopBar from '../components/TopBar';
import Card from '../components/Card';
import './More.css';

export default function More() {
  return (
    <div className="screen">
      <TopBar title="More" />
      <div className="screen-content">
        <div className="profile-section">
          <div className="profile-avatar">JD</div>
          <div className="profile-info">
            <div className="profile-name text-title-large font-semibold">John Doe</div>
            <div className="profile-email text-body-medium text-neutral">john.doe@email.com</div>
          </div>
        </div>

        <div className="menu-section">
          <h3 className="menu-section-title text-title-small font-semibold text-neutral">Account</h3>
          <Card className="menu-item">Personal Information →</Card>
          <Card className="menu-item">Bank Accounts →</Card>
          <Card className="menu-item">Tax Information →</Card>
        </div>

        <div className="menu-section">
          <h3 className="menu-section-title text-title-small font-semibold text-neutral">Trading</h3>
          <Card className="menu-item">Trading Preferences →</Card>
          <Card className="menu-item">Risk Profile →</Card>
        </div>

        <div className="menu-section">
          <h3 className="menu-section-title text-title-small font-semibold text-neutral">App</h3>
          <Card className="menu-item">Notifications →</Card>
          <Card className="menu-item">Appearance →</Card>
          <Card className="menu-item">Security →</Card>
        </div>

        <div className="menu-section">
          <h3 className="menu-section-title text-title-small font-semibold text-neutral">Support</h3>
          <Card className="menu-item">Help & Support →</Card>
          <Card className="menu-item">About →</Card>
        </div>
      </div>
    </div>
  );
}

