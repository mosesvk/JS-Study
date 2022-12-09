import Button from './components/Button';

const App = () => {
  return (
    <div>
      <Button success primary rounded outline>
        Success
      </Button>
      <Button danger outline>Danger</Button>
      <Button warning>Warning</Button>
      <Button primary rounded>Primary</Button>
      <Button secondary outline></Button>
    </div>
  );
};

export default App;
