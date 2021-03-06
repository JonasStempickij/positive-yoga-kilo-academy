import logo from './assets/images/Logo.svg';
import StickyDiscount from './components/StickyDiscount';
import Faq from './pages/Faq';
import SuccessStories from './pages/SuccessStories';
import YogaForYou from './pages/YogaForYou';
import YogaPlan from './pages/YogaPlan';

function App() {
  return (
    <>
      <StickyDiscount />
      <header>
        <img src={logo} alt='logo' />
      </header>
      <div className='content'>
        <p className='ordered'>
          Over <b>52 147</b> plans ordered.
        </p>
        <h1>Get access to your yoga program now!</h1>
        <YogaPlan />
        <SuccessStories />
        <YogaForYou />
        <Faq />
        <h2>Start your yoga program today! </h2>
        <YogaPlan />
      </div>
    </>
  );
}

export default App;
