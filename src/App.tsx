import React from 'react';
import { MenuItem } from './components/MenuItem';
import { MenuSection } from './components/MenuSection';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url('/plublic/3.png'), linear-gradient(to bottom, #12445a, #006c91)`,
        backgroundSize: 'cover', 
        backgroundSize: 'contain',
        backgroundPosition: 'center top', 
        backgroundRepeat: 'repeat', 
        
      }}
    >
      <ScrollToTop />
      
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <img src={'/plublic/ta na hora de festar.png'} alt="Logo" className="mx-auto mb-4" style={{ width: '300px', height: 'auto' }}   />
          <img src={'/plublic/drinks.png'} alt="Logo" className="mx-auto mb-4" style={{width: '200px', height: 'auto'}} />
          <h1 className="text-[#dcb02d] text-3xl" style={{ fontFamily: 'Merriweather', fontWeight: 900 }}>
            2025 CARDÁPIO FESTA DE CONFRATERNIZAÇÃO
          </h1>

        </header>

        <MenuSection title="PETISCOS">
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Cachaça</span>} />
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Caipirinha</span>} />
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Frango Frito</span>} />
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Torresmo</span>} />
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Mini Almôndega</span>}  />
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Mandioca</span>}/>
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Linguiça</span>}/>
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Cubo de Mortadela Bolonha Ouro Perdigão</span>} />
        </MenuSection>

        <MenuSection title="BAR DE BEBIDAS">
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Cerveja</span>}/>
          <MenuItem title="Coca-Cola" description="Normal e Zero" />
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Guaraná</span>}/>
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Suco</span>}/>
          <MenuItem title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Água</span>}/>
        </MenuSection>

        <MenuSection title="DRINKS">
        <MenuItem
            title={
              <span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>
                Tropical Gin 'Corta pra Mim e Serve mais Outro'
              </span>
            }
            description={
              <span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>
                Energético Tropical, gin, lâmina de laranja e maracujá. <br />
                <span style={{ fontWeight: 'bold', color: '#dcb02d' }}>
                  Preço: Pós-Produção Perfeita
                </span>
              </span>
            }
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Sex on the Beach 'Acolhida com Sabor e Diversão'</span>}
            description={
              <span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>
                Suco de pêssego, laranja, vodka e grenadine. <br />
                <span style={{ fontWeight: 'bold', color: '#dcb02d' }}>
                  Preço: Pago com Sorrisos!
                </span>
              </span>
            }
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Mojito 'Recursos Humanos, Ressaca Desumana'</span>}
            description={
              <span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>
                Refrescante: Limão, hortelã, vodka, açúcar e água com gás. <br />
                <span style={{ fontWeight: 'bold', color: '#dcb02d' }}>
                  Preço: Contratação de Sorrisos
                </span>
              </span>
            }
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Caipi-frutas 'Pauta Fechada, Brinde Aberto'</span>}
            description={
              <span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>
                Limão, frutas vermelhas, abacaxi. <br />
                <span style={{ fontWeight: 'bold', color: '#dcb02d' }}>
                  Preço: Temperada com Fontes Confiáveis
                </span>
              </span>
            }
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Moscow Mule 'Chamado Resolvido, Gole Merecido'</span>}
            description={
              <span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>
                Suco de limão, xarope de gengibre, vodka e espuma especial. Servido na caneca estilo cobre. <br />
                <span style={{ fontWeight: 'bold', color: '#dcb02d' }}>
                   Preço: Sem Espera, Só Alegria!
                </span>
              </span>
            }
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Tropical Gin 'Varreu as Preocupações, Sobrou o Brinde'</span>}
            description={
              <span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>
                <span style={{ fontWeight: 'bold', color: '#dcb02d' }}>
                  Preço: Higienizado com Alegria
                </span>
              </span>
            }
          />
        </MenuSection>

        <MenuSection title="FOGO DE CHÃO">
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Porco</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Porco</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Carneiro</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Carneiro</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Costela</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição da Costela</span>}
          />
        </MenuSection>

        <MenuSection title="PARRILHA">
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Picanha</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição da Picanha</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Cupim</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Cupim</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Chorizo</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Chorizo</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Fraldinha</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição da Fraldinha</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Linguiças</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição das Linguiças</span>}
          />
        </MenuSection>

        <MenuSection title="GUARNIÇÕES">
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Arroz Branco</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Arroz Branco</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Tropeiro</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Tropeiro</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Paçoca</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição da Paçoca</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Ovo Frito</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Ovo Frito</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Mandioca</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição da Mandioca</span>}
          />
        </MenuSection>

        <MenuSection title="TRIPÉ">
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Arroz Carreteiro</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Arroz Carreteiro</span>}
          />
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Galinhada Pantaneira</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição da Galinhada Pantaneira</span>}
          />
        </MenuSection>

        <MenuSection title="SALADA">
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Vinagrete</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Vinagrete</span>}
          />
        </MenuSection>

        <MenuSection title="PARA REFRESCAR">
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Sorvete Sabor de Infância</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Sorvete</span>}
          />
        </MenuSection>

        <MenuSection title="TARDE MAIS DOCE">
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Doces e Frutas</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição dos Doces e Frutas</span>}
          />
        </MenuSection>

        <MenuSection title="FINALIZAR O EVENTO">
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Mini Hambúrguer</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição do Mini Hambúrguer</span>}
          />
        </MenuSection>

        <MenuSection title="PARA ENCERRAR O EVENTO">
          <MenuItem
            title={<span style={{ fontFamily: 'Merriweather', fontWeight: 300 }}>Caldos</span>}
            description={<span style={{ fontFamily: 'Merriweather', fontWeight: 200 }}>Descrição dos Caldos</span>}
          />
        </MenuSection>

        <div className="text-center">
          <h2 className="text-[#dcb02d] text-1xl" style={{ fontFamily: 'Merriweather', fontWeight: 900 }}>
          <br/>Beba com moderação e celebre com entusiasmo!
          </h2>
        </div>

        <div className="text-center">
          <h2 className="text-[#dcb02d] text-1xl" style={{ fontFamily: 'Merriweather', fontWeight: 900 }}>
            Porque cada brinde é uma conquista compartilhada!<br/><br/>
          </h2>
        </div>
        <img src={'/plublic/LogoAgenciaSantoAfonsoP&BVertical.png'} alt="Logo" className="mx-auto mb-4" style={{ width: '60px', height: 'auto' }}   />

      </div>
    </div>
  );
}

export default App;