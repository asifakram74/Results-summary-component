import '../assets/css/ResultApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import allResultCards from '../components/ResultCard';
import ResultData from '../components/ResultData';

export default function ResultApp() {
  return (
    <div className='parent'>
        <div className="main_card">
          <div className="card1">
              <h5 className='heading'>Your Result</h5>
              <div className='circle'>
                <p className='marks'>
                  <span className='num'>76</span>
                  <br></br>
                  <span className='inner_card t_marks'>of 100</span>
                </p>
              </div>
              <p className='inner_card title'>Great</p>
              <p className='inner_card t_marks'>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
          <div className="card2">
              <h5 className=''>Summary</h5>
              {ResultData.map(allResultCards)}
              <button className='button'>Continue</button>
          </div>

        </div>
      </div>
  );
}
