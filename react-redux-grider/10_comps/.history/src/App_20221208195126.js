import { GoBell } from 'react-icons/go';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <Button success rounded outline>
        <GoBell />
        Success
      </Button>
      <Button danger outline>
        Danger
      </Button>
      <Button warning>Warning</Button>
      <Button primary rounded>
        Primary
      </Button>
      <Button secondary outline>
        Secondary
      </Button>
    </div>
  );
};

export default App;
