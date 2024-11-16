import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 10; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 15); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
    navigate('https://humanrightsfirst.org/');
  };

  return (
    <div class='flex-c w-[100vw] secondary-c'>
      <section class='flex primary-c pt-4 pb-8'>
        <div class='flex-c mx-auto'>
          <h1 class='text-6xl mb-8 text-white'>Asylum Office Grant Rate Tracker</h1>
          <h3 class='text-white'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions
          </h3>
        </div>
      </section>
      <section class='graphs-section flex-c pt-10'>
        <div class='flex-c'>
          <div class='flex justify-center m-14 gap-20 text-2xl'>
            <div class='flex-c gap-3'>
              <img src={barGraph} alt class='h-[300px] w-[500px]' />
              <h3>Search Grant Rates By Office</h3>
            </div>
            <div class='flex-c gap-3'>
              <img src={pieChart} alt class='h-[300px] contain-content' />
              <h3>Search Grant Rates By Nationality</h3>
            </div>
            <div class='flex-c gap-3'>
              <img src={lineGraph} alt class='h-[300px] w-[500px]' />
              <h3>Search Grant Rates Over Time</h3>
            </div>
          </div>
          <div class='flex align-center mx-auto gap-8'>
            <button class='bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold'>View the Data</button>
            <button class='bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold'>Download the Data</button>
          </div>
        </div>
      </section>
      <section class='middle-section flex'></section>
      <section class='insights-section flex-c gap-16'></section>
      <section class='read-more-section'></section>
      <section class='back-to-top p-16'></section>
    </div>
  );
};
