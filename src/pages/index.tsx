import Head from 'next/head'
import styles from '~/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Atlantis - Processo EAA</title>
        <meta name="description" content="Atlantis - Processo EAA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <img src="/Separator.svg" alt="separator" />
            <img src="/Logo.png" alt="logo" className={styles.logo} />
            <p>Landing Page e VSL do produto Atlantis, para o processo seletivo&nbsp;<br/>“<em>Emprego de Alto Aprendizado</em>” 2023, do Max Peters.</p>
          </div>
        </div>
        <img src="/Separator.svg" alt="separator" className={styles.separator} />
       <div className={styles.sectionTitle}>
        <h2><b>Parte 1:</b>&nbsp;o vídeo</h2>
        <p>Apesar de eu ter feito várias&nbsp;<em>headlines</em>&nbsp;e&nbsp;<em>copies</em>&nbsp;(exibidas a seguir),&nbsp;<br/>fiz apenas uma VSL, como pedido na página do processo seletivo.</p>
       </div>
       <iframe
        src="https://player.vimeo.com/video/799279118?h=94bbee2f86"
        width="640" height="564"
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
        />
        <ul className={styles.firstList}>
          <li>
            Narração: via inteligência artificial, plano Premium do&nbsp;<a href="https://naturalreaders.com/online" target="_blank">naturalreaders.com</a>.
          </li>
          <li>
            Edição: tutoriais de Davinci Resolve no YouTube.
          </li>
          <li>
            Legendas:&nbsp;<a href="https://cloud.google.com/speech-to-text/" target="_blank">API de&nbsp;<em>Speech-to-Text</em></a>&nbsp;do Google Cloud e um script em Python.
          </li>
          <li>
            Vídeos: plano gratuito do&nbsp;<a href="https://www.pond5.com/" target="_blank"><em>Pond5</em></a>. (perdoe a marca d'água, cada vídeo pago era<br/>140 R$, por não se tratar de um projeto oficial peguei os vídeos gratuitos).
          </li>
        </ul>
        <img src="/Separator.svg" alt="separator" className={styles.separator} />
        <div className={styles.sectionTitle}>
          <h2><b>Parte 2:</b>&nbsp;sobre a <em>copy</em></h2>
          <p>Breve explicação da minha ideia e outros exemplos.<br/>Tem esse&nbsp;<a href="/copies_atlantis_italo.pdf" target="_blank">pdf</a> com variações de&nbsp;<em>copies</em>.</p>
       </div>
        <div className={styles.bidIdea}>
          <p>A ideia principal da copy era:</p>
          <h2>“uma substância que evita uma dor inerente, que o organismo não<br/>produz naturalmente, e há provas de que funciona”</h2>
          <p>Esse mesmo princípio pode ser aplicado para:</p>
          <ul>
            <li>
              <strong>Vitamina B</strong>: é essencial para a produção de BDNF (<em>brain derived neurotrophic factor</em>), fundamental<br/>no aprendizado e formação de memória, que no stress cotidiano o corpo produz bem menos.<br/>“BDNF” é um ótimo mecanismo único, e dá para vender isso para estudantes.
            </li>
            <li>
              <strong>Magnésio</strong>: melhora sono, saúde mental, foco, e também é depletado pelo stress. O&nbsp;<a href="https://instagram.com/dr_duprat/" target="_blank">Dr. Duprat</a><br/>(um dos grandes nomes da&nbsp;<em>alta performance</em>&nbsp;no Brasil) recomenda o uso.
            </li>
          </ul>
       </div>
       <img src="/Separator.svg" alt="separator" className={styles.separator} />
        <div className={styles.sectionTitle}>
          <h2><b>Parte 3:</b>&nbsp;<em>extras</em></h2>
          <p>Só queria aproveitar o espaço pra deixar em anexo o tal laudo psicológico com<br/>“<em>indícios de altas habilidades</em>”,&nbsp;para provar que não menti na aplicação.<br/>Não é um teste Mensa mas acredito que seja interessante.</p>
          <p>Aqui o <a href="/altas_skill_etc.pdf" target="_blank">pdf</a>.</p>
       </div>
       
      </main>
    </>
  )
}
