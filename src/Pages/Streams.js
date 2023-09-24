
import Blob from '../components/Blob';
import Navbar from '../components/Navbar';
import './Streams.css'
import Footer from '../components/Footer';


const HomePage = () => {

  return (
    <div className='mainWrap'>
      <Navbar/>
      <div className="hide-on-mobile">
        <Blob />
      </div>
      <div className="contentWrap">
        <div className="content">
          In CBSE, students can choose a minimum of 5 and a maximum of 9 subjects. <br />
          Usually, there are 4 to 5 main subjects and an optional subject.<br />
          <div className='small_heading'>All available streams after 10th</div>
          <ol>
            <li><span className='numpt'>Science Stream(Medical):</span>
              <ul>
                <li><span className='bulletpt'>Subjects: </span>Physics, Chemistry, Biology, English, Optional</li>
                <li><span className='bulletpt'>Career Options: </span>Students who aspire to pursue careers in medicine, dentistry, veterinary science, pharmacy, nursing, biotechnology, or any other field related to life sciences.</li>
                <li><span className='bulletpt'>Characteristics: </span><br />
                  - Strong interest in biology and life sciences.<br />
                  - Compassion and empathy, as medical professions often involve patient care.<br />
                  - Willingness to dedicate several years to medical education and training. </li>
              </ul>
            </li>
            <br />

            <li><span className='numpt'>Science Stream(Non-Medical) or Engineering:</span>
              <ul>
                <li><span className='bulletpt'>Subjects: </span>Physics, Chemistry, Mathematics, English, Optional</li>
                <li><span className='bulletpt'>Career Options: </span>Students who intend to pursue careers in engineering, technology, physical sciences, computer science, architecture, or any field that requires a strong foundation in mathematics and physical sciences.</li>
                <li><span className='bulletpt'>Characteristics: </span><br />
                  - Proficiency in mathematics and problem-solving.<br />
                  - Interest in understanding physical and mathematical concepts.<br />
                  - Desire to innovate and work on technical solutions.
                </li>
              </ul>
            </li>
            <br />

            <li><span className='numpt'>Arts (Humanities):</span>
              <ul>
                <li><span className='bulletpt'>Subjects: </span>History, Political Science, Economics, English, Optional
</li>
                <li><span className='bulletpt'>Career Options: </span>Students interested in fields like literature, history, social sciences, journalism, law, teaching, psychology, and the arts. It provides flexibility and a diverse set of career options.
                </li>
                <li><span className='bulletpt'>Characteristics: </span><br />
                  - Strong communication and writing skills.<br />
                  - Interest in understanding human behavior, society, and culture.<br />
                  - Ability to think critically, analyze information, and express ideas effectively.
                </li>
              </ul>
            </li>
            <br />

            <li><span className='numpt'>Commerce:</span>
              <ul>
                <li><span className='bulletpt'>Subjects: </span>Accountancy, Business Studies, Economics, English, Optional
</li>
                <li><span className='bulletpt'>Career Options: </span>Students interested in business, finance, commerce, and economics. It can lead to careers in accounting, finance, banking, entrepreneurship, management, and more.
                </li>
                <li><span className='bulletpt'>Characteristics: </span><br />
                  - Good numerical and analytical skills.<br />
                  - Interest in understanding economic and business concepts.<br />
                  - Ability to analyze financial data and make informed decisions.
                </li>
              </ul>
            </li>
            <br />
          </ol>

          <ul>
            <li><span className='numpt'>Most common Optional Subjects:</span> <br/>
            <div style={{marginTop: "0.5em", marginLeft:'2em'}}>Informatics practice, computer science, psychology, geography, sociology, painting, physical education, healthcare, banking, insurance or entrepreneurship etc.</div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage