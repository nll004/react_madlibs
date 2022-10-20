import { render } from '@testing-library/react';
import App from './App';
import Madlib from './Madlibs';
import MadlibForm from './MadlibForm';
import MadlibResult from './MadlibResult'

test('Smoketests: renders components without breaking', () => {
  render(<App />);
  render(<Madlib />);
  render(<MadlibForm />);
  render(<MadlibResult inputs={{adjective: '', noun: '', noun2: '', verb: ''}}/>)
});
