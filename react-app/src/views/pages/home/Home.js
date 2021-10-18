import HomeSectionOne from '../../components/sections/homeSectionOne';
import HomeSectionTwo from '../../components/sections/homeSectionTwo';
import FloatImage from '../../components/floatImage/floatImage';

const Home = {
  is_private: false,

  render: async () => {
      const view = `
          <main>
            ${HomeSectionOne}
            ${HomeSectionTwo}
          </main>
          ${FloatImage}
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;