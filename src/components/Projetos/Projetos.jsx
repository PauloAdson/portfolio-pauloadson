import './styles.css';
import html5Logo from '../../assets/images/logos-ferramentas/html5-logo.png';
import css3Logo from '../../assets/images/logos-ferramentas/css3-logo.png';
import figmaLogo from '../../assets/images/logos-ferramentas/figma-logo.png';
import javascriptLogo from '../../assets/images/logos-ferramentas/javascript-logo.png';
import mongodbLogo from '../../assets/images/logos-ferramentas/mongodb-logo.png';
import mysqlLogo from '../../assets/images/logos-ferramentas/mysql-logo.png';
import nodejsLogo from '../../assets/images/logos-ferramentas/nodejs-logo.png';
import phpLogo from '../../assets/images/logos-ferramentas/php-logo.png';
import reactLogo from '../../assets/images/logos-ferramentas/react-logo.png';
import Projeto from '../Projeto/Projeto';
import Button from '../Button/Button';

const Projetos = () => {
  return (
    <>
      <section className='projetos' id='projetos'>
        <div className='projetos__container-title'>
          <h2 className='projetos__title uppercase'>Projetos</h2>
          <span className='projetos__subtitle'>
            Clique na imagem para ver o projeto completo!
          </span>
        </div>

        <div className='projetos__container-projetos'>
          <Projeto
            class_projeto_img='azevedo-advocacia'
            projeto_img={
              'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/azevedo-avocacia.png'
            }
            projeto_img_desc='Imagem da Página Azevedo Advocia e Consultoria Jurídica'
            projeto_title='Azevedo Advocia e Consultoria Jurídica'
            projeto_desc='Página institucional para Azevedo Advocacia e Consultoria Jurídica, desenvolvida com WordPress, HTML5 e CSS. Conta com um blog para artigos e uma estrutura visual projetada no Figma, garantindo uma navegação intuitiva e uma imagem profissional.'
            projeto_linguagens={[
              {
                src: html5Logo,
                desc: 'Logo HTML5',
              },
              {
                src: css3Logo,
                desc: 'Logo CSS3',
              },
              {
                src: figmaLogo,
                desc: 'Logo Figma',
              },
            ]}
            projeto_link='https://asazevedo.adv.br/'
          />

          <Projeto
            class_projeto_img='furlan-solucoes'
            projeto_img={
              'https://raw.githubusercontent.com/PauloAdson/portfolio-pauloadson/refs/heads/main/src/assets/images/projetos/site-furlan-desktop.png'
            }
            projeto_img_desc='Imagem da Página Furlan Soluções Financeiras'
            projeto_title='Furlan Soluções Financeiras'
            projeto_desc='Desenvolvi o site utilizando HTML, CSS, Wordpress por preferência do cliente,começando pelo protótipo no Figma.'
            projeto_linguagens={[
              {
                src: html5Logo,
                desc: 'Logo HTML5',
              },
              {
                src: css3Logo,
                desc: 'Logo CSS3',
              },
              {
                src: figmaLogo,
                desc: 'Logo Figma',
              },
            ]}
            projeto_link='https://furlansolucoesfinanceiras.com.br/'
          />

          <Projeto
            class_projeto_img='maratona-vocal'
            projeto_img={
              'https://raw.githubusercontent.com/PauloAdson/portfolio-pauloadson/refs/heads/main/src/assets/images/projetos/maratonavocal-desktop.png'
            }
            projeto_img_desc='Imagem página de vendas Maratona Vocal'
            projeto_title='Página de Vendas | Maratona Vocal'
            projeto_desc='Uma página de vendas online para a Maratona Vocal. Desenvolvida com React, garantindo alta performance e interatividade para uma navegação fluida e envolvente.'
            projeto_linguagens={[
              {
                src: reactLogo,
                desc: 'Logo React',
              },
              {
                src: html5Logo,
                desc: 'Logo HTML5',
              },
              {
                src: css3Logo,
                desc: 'Logo CSS3',
              },
            ]}
            projeto_link='https://maratonavocal.vercel.app/'
          />

          <Projeto
            class_projeto_img='petlife'
            projeto_img={
              'https://raw.githubusercontent.com/PauloAdson/portfolio-pauloadson/refs/heads/main/src/assets/images/projetos/petlife-desktop.png'
            }
            projeto_img_desc='Imagem página de uma clínica veterinária PetLife'
            projeto_title='PetLife'
            projeto_desc='Desenvolvida com HTML, CSS e JavaScript, a página oferece uma interface intuitiva e funcional, proporcionando uma experiência agradável e fácil de usar.'
            projeto_linguagens={[
              {
                src: html5Logo,
                desc: 'Logo HTML5',
              },
              {
                src: css3Logo,
                desc: 'Logo CSS3',
              },
              {
                src: javascriptLogo,
                desc: 'Logo JavaScript',
              },
            ]}
            projeto_link='https://petlife-one.vercel.app/'
          />

          <Projeto
            class_projeto_img='Aulas de Música'
            projeto_img={
              'https://raw.githubusercontent.com/PauloAdson/portfolio-pauloadson/refs/heads/main/src/assets/images/projetos/aulas-de-musica.png'
            }
            projeto_img_desc='Imagem da Página Aulas de Música'
            projeto_title='Aulas de Música'
            projeto_desc='Desenvolvi o site utilizando React, começando pelo protótipo no Figma e até criando a logo.'
            projeto_linguagens={[
              {
                src: reactLogo,
                desc: 'Logo React',
              },
              {
                src: html5Logo,
                desc: 'Logo HTML5',
              },
              {
                src: css3Logo,
                desc: 'Logo CSS3',
              },
              {
                src: figmaLogo,
                desc: 'Logo Figma',
              },
            ]}
            projeto_link='https://paulo-aulas-de-musica.vercel.app/'
          />

          <Projeto
            class_projeto_img='landing-page'
            projeto_img={
              'https://raw.githubusercontent.com/PauloAdson/portfolio-pauloadson/refs/heads/main/src/assets/images/projetos/landing-page.png'
            }
            projeto_img_desc='Imagem da Landing Page'
            projeto_title='Landing Page'
            projeto_desc='Desenvolvida com HTML5 e CSS. Créditos: Design feito por Animaapp.com'
            projeto_linguagens={[
              {
                src: html5Logo,
                desc: 'Logo HTML5',
              },
              {
                src: css3Logo,
                desc: 'Logo CSS3',
              },
              {
                src: figmaLogo,
                desc: 'Logo Figma',
              },
            ]}
            projeto_link='https://pauloadson.github.io/landing-page/'
          />

          <Projeto
            class_projeto_img='copia-spotify'
            projeto_img={
              'https://raw.githubusercontent.com/PauloAdson/portfolio-pauloadson/refs/heads/main/src/assets/images/projetos/spotify.png'
            }
            projeto_img_desc='Imagem da Página Cópia do Spotify'
            projeto_title='Cópia do Spotify'
            projeto_desc='Desenvolvi o site com React, Node.js e MongoDB, construí uma aplicação funcional que reforçou meu conhecimento em integração com banco de dados e manipulação de APIs.'
            projeto_linguagens={[
              {
                src: reactLogo,
                desc: 'Logo React',
              },
              {
                src: nodejsLogo,
                desc: 'Logo Node',
              },
              {
                src: mongodbLogo,
                desc: 'Logo MongoDB',
              },
            ]}
            projeto_link='https://deploy-spotify-8v75.onrender.com/'
          />

          {/* <Projeto
            class_projeto_img='curso-ebd'
            projeto_img={
              'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/curso-ebd.png'
            }
            projeto_img_desc='Imagem da Plataforma de Curso de Escola Bíblica'
            projeto_title='Plataforma de Curso | Escola Bíblica'
            projeto_desc='Uma plataforma online onde os usuários podem se cadastrar, fazer login e acessar conteúdos de curso bíblico. Desenvolvida com React, Node.js e MySQL para garantir interatividade, segurança e performance. O design da interface foi planejado utilizando o Figma, garantindo uma experiência de usuário fluida e intuitiva.'
            projeto_linguagens={[
              {
                src: reactLogo,
                desc: 'Logo React',
              },
              {
                src: nodejsLogo,
                desc: 'Logo Node',
              },
              {
                src: mysqlLogo,
                desc: 'Logo Mysql',
              },
              {
                src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/figma-logo.png',
                desc: 'Logo Figma',
              },
            ]}
            projeto_link='https://curso-ebd.vercel.app/'
          /> */}

          <Projeto
            class_projeto_img='consulta-votacao'
            projeto_img={
              'https://raw.githubusercontent.com/PauloAdson/portfolio-pauloadson/refs/heads/main/src/assets/images/projetos/consultarvotacao.png'
            }
            projeto_img_desc='Imagem página local de votação'
            projeto_title='Consulta de Local de Votação'
            projeto_desc='Um site voltado para moradores de Goiânia, que permite consultar rapidamente o local de votação. Utilizando HTML, CSS, PHP e MySQL, a plataforma oferece uma interface simples e funcional para facilitar o acesso a informações eleitorais de maneira eficiente e intuitiva.'
            projeto_linguagens={[
              {
                src: html5Logo,
                desc: 'Logo HTML5',
              },
              {
                src: css3Logo,
                desc: 'Logo CSS3',
              },
              {
                src: phpLogo,
                desc: 'Logo PHP',
              },
              {
                src: mysqlLogo,
                desc: 'Logo MYSQL',
              },
            ]}
            projeto_link='https://paulosites.com.br/eleicoes/consultar'
          />

          <Button
            btnText={'GitHub + Projetos'}
            btnLink={'https://github.com/PauloAdson'}
            target={'_blank'}
          />
        </div>
      </section>
    </>
  );
};

export default Projetos;
