/* ==========================================
   RADAR INVERSIÓN V3
   VARIABLES Y ESTILOS GLOBALES
========================================== */

:root{
    --bg:#0f1115;
    --surface:#181b20;
    --surface-2:#22262d;

    --gold:#d4af37;
    --gold-dark:#b99322;

    --white:#ffffff;
    --text:#d9d9d9;
    --muted:#9ca3af;

    --radius:18px;

    --shadow:0 12px 40px rgba(0,0,0,.35);

    --transition:.30s ease;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:"Poppins",sans-serif;
    background:var(--bg);
    color:var(--white);
    line-height:1.6;
}

img{
    display:block;
    max-width:100%;
}

a{
    text-decoration:none;
    color:inherit;
}

ul{
    list-style:none;
}

.container{
    width:min(1200px,92%);
    margin:auto;
}

/* ==========================================
   BOTONES
========================================== */

.btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;

    padding:16px 34px;

    border-radius:14px;

    font-weight:600;

    transition:var(--transition);

    cursor:pointer;
}

.btn-primary{
    background:var(--gold);
    color:#111;
}

.btn-primary:hover{
    background:var(--gold-dark);
    transform:translateY(-2px);
}

.btn-secondary{
    border:2px solid var(--gold);
    color:var(--gold);
}

.btn-secondary:hover{
    background:var(--gold);
    color:#111;
}

/* ==========================================
   NAVBAR
========================================== */

.navbar{

    position:fixed;

    top:0;

    left:0;

    width:100%;

    background:rgba(15,17,21,.92);

    backdrop-filter:blur(10px);

    border-bottom:1px solid rgba(255,255,255,.06);

    z-index:1000;
}

.navbar .container{

    display:flex;

    align-items:center;

    justify-content:space-between;

    padding:18px 0;
}

.logo{

    font-size:1.6rem;

    font-weight:800;

    letter-spacing:1px;
}

.logo span{

    color:var(--gold);
}

.menu{

    display:flex;

    gap:32px;
}

.menu a{

    color:var(--text);

    font-weight:500;

    transition:var(--transition);
}

.menu a:hover{

    color:var(--gold);
}

.instagram{

    color:var(--gold);

    border:1px solid var(--gold);

    padding:10px 18px;

    border-radius:999px;

    transition:var(--transition);
}

.instagram:hover{

    background:var(--gold);

    color:#111;
}/* ==========================================
   HERO
========================================== */

.hero{

    position:relative;

    min-height:100vh;

    display:flex;

    align-items:center;

    justify-content:center;

    text-align:center;

    overflow:hidden;

    padding:140px 0 80px;
}

.overlay{

    position:absolute;

    inset:0;

    background:
    radial-gradient(circle at top,
    rgba(212,175,55,.15),
    transparent 45%),
    linear-gradient(to bottom,
    rgba(15,17,21,.15),
    rgba(15,17,21,.95));

    z-index:0;
}

.hero-content{

    position:relative;

    z-index:2;

    max-width:900px;
}

.hero-tag{

    display:inline-block;

    margin-bottom:25px;

    color:var(--gold);

    font-weight:600;

    letter-spacing:2px;

    text-transform:uppercase;

    font-size:.95rem;
}

.hero h1{

    font-size:clamp(2.7rem,7vw,5rem);

    font-weight:800;

    line-height:1.1;

    margin-bottom:30px;
}

.hero h1 span{

    color:var(--gold);
}

.hero p{

    max-width:760px;

    margin:0 auto 45px;

    color:var(--text);

    font-size:1.15rem;
}

.hero-buttons{

    display:flex;

    justify-content:center;

    gap:20px;

    flex-wrap:wrap;

    margin-bottom:70px;
}

.hero-metrics{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:25px;
}

.metric{

    background:var(--surface);

    border:1px solid rgba(255,255,255,.06);

    border-radius:18px;

    padding:28px;

    box-shadow:var(--shadow);

    transition:var(--transition);
}

.metric:hover{

    transform:translateY(-6px);

    border-color:rgba(212,175,55,.4);
}

.metric h3{

    font-size:2.3rem;

    color:var(--gold);

    margin-bottom:10px;
}

.metric p{

    margin:0;

    color:var(--muted);

    font-size:.95rem;
}

/* ==========================================
   RESPONSIVE HERO
========================================== */

@media (max-width:768px){

    .hero{

        padding-top:130px;
    }

    .hero-buttons{

        flex-direction:column;

        align-items:center;
    }

    .hero-buttons .btn{

        width:100%;

        max-width:340px;
    }

    .hero-metrics{

        grid-template-columns:1fr;

    }

}/* ==========================================
   SECCIONES GENERALES
========================================== */

section{
    padding:100px 0;
}

.section-header{
    text-align:center;
    max-width:760px;
    margin:0 auto 70px;
}

.section-tag{
    display:inline-block;
    color:var(--gold);
    font-weight:600;
    text-transform:uppercase;
    letter-spacing:2px;
    margin-bottom:18px;
    font-size:.9rem;
}

.section-header h2{
    font-size:clamp(2rem,4vw,3rem);
    margin-bottom:20px;
    line-height:1.2;
}

.section-header p{
    color:var(--muted);
    font-size:1.05rem;
}

/* ==========================================
   PRESENTACIÓN
========================================== */

.intro{
    background:var(--bg);
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.feature-card{
    background:var(--surface);
    padding:40px 30px;
    border-radius:var(--radius);
    border:1px solid rgba(255,255,255,.06);
    transition:var(--transition);
    box-shadow:var(--shadow);
}

.feature-card:hover{
    transform:translateY(-8px);
    border-color:rgba(212,175,55,.45);
}

.feature-icon{
    width:70px;
    height:70px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(212,175,55,.12);
    font-size:2rem;
    margin-bottom:25px;
}

.feature-card h3{
    margin-bottom:15px;
    font-size:1.35rem;
}

.feature-card p{
    color:var(--muted);
}

/* ==========================================
   PROCESO
========================================== */

.process{
    background:var(--surface);
}

.steps{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:30px;
}

.step{
    background:var(--surface-2);
    border-radius:var(--radius);
    padding:35px;
    border:1px solid rgba(255,255,255,.05);
    transition:var(--transition);
}

.step:hover{
    transform:translateY(-8px);
    border-color:rgba(212,175,55,.45);
}

.step-number{
    width:60px;
    height:60px;
    border-radius:50%;
    background:var(--gold);
    color:#111;
    font-weight:700;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:25px;
}

.step h3{
    margin-bottom:15px;
    font-size:1.3rem;
}

.step p{
    color:var(--muted);
}/* ==========================================
   OPORTUNIDAD DESTACADA
========================================== */

.properties{
    background:var(--bg);
}

.property-card{
    display:grid;
    grid-template-columns:1fr 1.2fr;
    gap:40px;
    background:var(--surface);
    border-radius:24px;
    overflow:hidden;
    box-shadow:var(--shadow);
    border:1px solid rgba(255,255,255,.06);
}

.property-image{
    min-height:500px;
    position:relative;
    background:
        linear-gradient(rgba(15,17,21,.25),rgba(15,17,21,.25)),
        url("assets/img/terrassa.jpg") center/cover no-repeat;
}

.property-label{
    position:absolute;
    top:25px;
    left:25px;
    background:var(--gold);
    color:#111;
    padding:10px 18px;
    border-radius:999px;
    font-weight:700;
}

.property-info{
    padding:45px;
}

.property-header{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    gap:20px;
    margin-bottom:35px;
}

.property-header h3{
    font-size:2rem;
    margin-bottom:8px;
}

.property-location{
    color:var(--muted);
}

.property-price{
    color:var(--gold);
    font-size:2rem;
    font-weight:800;
}

.property-specs{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:20px;
    margin-bottom:40px;
}

.property-specs div{
    background:var(--surface-2);
    border-radius:16px;
    padding:20px;
    text-align:center;
}

.property-specs strong{
    display:block;
    color:var(--gold);
    font-size:1.4rem;
    margin-bottom:6px;
}

.property-specs span{
    color:var(--muted);
    font-size:.9rem;
}

/* ==========================================
   RADAR SCORE
========================================== */

.radar-score{
    margin-bottom:40px;
}

.score-title{
    display:flex;
    justify-content:space-between;
    margin-bottom:25px;
    align-items:center;
}

.score-title span{
    color:var(--gold);
    font-weight:700;
}

.score-row{
    margin-bottom:18px;
}

.score-row span{
    display:block;
    margin-bottom:8px;
    color:var(--text);
}

.bar{
    width:100%;
    height:10px;
    background:#2a2f36;
    border-radius:999px;
    overflow:hidden;
}

.fill{
    height:100%;
    background:linear-gradient(90deg,var(--gold),#f4d35e);
    border-radius:999px;
}

.fill-90{width:90%;}
.fill-85{width:85%;}
.fill-80{width:80%;}
.fill-70{width:70%;}
.fill-65{width:65%;}

/* ==========================================
   DATOS DE INVERSIÓN
========================================== */

.investment-data{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:20px;
    margin-bottom:35px;
}

.investment-data div{
    background:var(--surface-2);
    border-radius:16px;
    padding:22px;
}

.investment-data strong{
    display:block;
    color:var(--gold);
    font-size:1.5rem;
    margin-bottom:8px;
}

.investment-data span{
    color:var(--muted);
}

.property-actions{
    display:flex;
    gap:18px;
    flex-wrap:wrap;
}

.property-actions .btn{
    flex:1;
    min-width:220px;
}

/* ==========================================
   RESPONSIVE
========================================== */

@media (max-width:992px){

    .property-card{
        grid-template-columns:1fr;
    }

    .property-image{
        min-height:300px;
    }

    .property-specs{
        grid-template-columns:repeat(2,1fr);
    }

    .investment-data{
        grid-template-columns:1fr;
    }

}
