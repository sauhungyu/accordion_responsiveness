import React from 'react';
import Accordion from './Accordion';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import small from "./mobile.png";
import medium from "./desktop.png";
import "./custom.css";


function App() {
  return (
    <div>
      <h1>Accordion Demo</h1>
      <Accordion>
        <div label="Section 1">
          <p>
            <strong> "content":</strong>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.
          </p>
         
        </div>


        <div label="Section 2">
          <p>
            <strong> "content":</strong> Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.
          </p>
          
        </div>


        <div label="Section 3">
          <p>
            <strong>"content": </strong> Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p>
            <ul><li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
            </ul>
          
          
        </div>


        <div label="Section 4">
          <p>
            <strong>"content":</strong> Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
         
        </div>

      </Accordion>
    



<div>
<div className='desktop'>
  <ResponsiveImage>
    <ResponsiveImageSize
      minWidth={0}
      path={medium}
    />
    <ResponsiveImageSize
      minWidth={415}
      path={medium}
    />
  </ResponsiveImage>
 </div>

 <div className='mobile'>
  <ResponsiveImage>
    <ResponsiveImageSize
      minWidth={0}
      path={small}
    />
    <ResponsiveImageSize
      minWidth={415}
      path={small}
    />
  </ResponsiveImage>
</div>

</div>

</div>



  );
}



export default App