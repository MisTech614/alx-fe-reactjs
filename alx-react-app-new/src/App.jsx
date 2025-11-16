import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './components/UserProfile.jsx';
import Counter from './components/Counter.jsx';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      {/*New user Profile*/}
      <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
      />
      <Counter />
      <Footer />
    </>
  );
}
export default App;

