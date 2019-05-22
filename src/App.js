import React from 'react';
import { CountdownTimer } from 'app/countdown-timer/countdown-timer.component';
import { CoinFlip } from 'app/coin-flip/coin-flip.component';
import { CollapsibleSection} from 'components/collapsible-section.component';

function App() {
  return (
    <div className="App">
      <CollapsibleSection title="Countdown Timer">
        <CountdownTimer/>
      </CollapsibleSection>
      <CollapsibleSection title="Coin Flip" isDefaultCollapsed>
        <CoinFlip/>
      </CollapsibleSection>
    </div>
  );
}

export default App;
