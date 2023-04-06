import LocalesBtn from '../components/common/locales/LocalesBtn';
import LocalesPage from './LocalesPage';

function MainPage() {
  return (
    <div>
      <img src="images/user.png" alt="user" />
      <div className="test">가나다라</div>
      <LocalesBtn />
      <LocalesPage />
    </div>
  );
}

export default MainPage;
