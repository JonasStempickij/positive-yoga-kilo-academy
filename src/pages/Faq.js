import faqList from '../assets/data/faqList';
import { FaqItem } from '../components/';
import Wrapper from '../assets/wrappers/Faq';

const Faq = () => {
  return (
    <Wrapper>
      <h3>Freaquently Asked Questions</h3>
      <div className='faq-list'>
        {faqList.map((item, index) => {
          return (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Faq;
