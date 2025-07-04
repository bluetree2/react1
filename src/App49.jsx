import React from 'react';
import {BrowserRouter, Link, NavLink, Outlet, Route, Routes} from "react-router";
import './assets/mtstyle.css';
// 연습
// 연습 : 경로 이동 시 모든 컴포넌트가 다시 마운트 되지 않도록 코드 작성
// 연습 : 현재 경로와 Link의 to prop이 같으면 그려지는 a요소에 active class추가하기

// /react/install
// /react/game
// /react/state

function ReactLayout() {
  return (
    <div>
      <div className="col-md-2 col-sm-2">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">사이드 바</h3>
          </div>
          <ul className="list-group">
            <li className="list-group-item"><NavLink to="/react/install">install</NavLink></li>
            <li className="list-group-item"><NavLink to="/react/game">game</NavLink></li>
            <li className="list-group-item"><NavLink to="/react/state">state</NavLink></li>
          </ul>
        </div>
      </div>
      <div></div>
        <Outlet></Outlet>
    </div>
  )
}

function ContentPage({title}) {
  return(
    <div className="container">
      <h3 className="text-md-center">{title} 페이지 입니다</h3>
      <h3 className="text-md-center">페이지에 오신 것을 환영합니다</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consequuntur delectus eum harum ipsum maiores
        obcaecati repellat soluta tempore veniam?
        Adipisci beatae dolor fugit quibusdam tempore?
        Consequatur cupiditate est illum tenetur!</p>
      <p>Adipisci deserunt eaque fuga hic illum iste laborum nisi praesentium quis.
        Autem deleniti error esse,
        et eveniet hic illum minus nemo nostrum officiis porro quaerat
        reiciendis repudiandae saepe unde voluptas?</p>
      <p>Accusamus culpa cum debitis dolores facilis,
        illo laborum quibusdam repudiandae similique
      voluptates. At cum, ex! Consectetur eaque eos molestias nobis numquam qui recusandae,
        veritatis? Laboriosam laudantium minima quae sequi tempora?</p>
      <p>Ab ad aspernatur at deserunt dicta enim explicabo impedit itaque iure
      modi, molestiae natus non quis,
        rem rerum saepe sapiente sint suscipit unde vero.
        Esse fugit libero non provident. Sit!</p>
      <p>Exercitationem perferendis porro reiciendis. Aliquid assumenda cumque et facere,
        fugiat hic ipsum iste magnam magni non odio perspiciatis placeat porro provident
        quidem quisquam, rerum saepe sed sint ullam voluptas voluptatum?</p>
      <p>Aut blanditiis consectetur debitis ducimus earum error excepturi
        explicabo id illum iustolaborum laudantium officiis pariatur,
        quia quibusdam sequi, sunt tempore ullam voluptates voluptatum.
        Incidunt maiores molestias saepe sit tempora?</p>
      <p>Aliquam animi autem debitis deserunt dolore enim eum ex excepturi
      facere fuga hic, illo illum impedit iusto libero maxime minima minus
        neque non quasi recusandae sed, sequi
      voluptatem voluptates voluptatibus.</p>
      <p>Commodi debitis ea error harum iure labore maxime nobis, non nulla qui
      quisquam quod sequi suscipit tempore totam. Doloremque earum ex facilis
        incidunt ipsam officia, possimus quam
      quasi repellendus voluptates.</p>
      <p>Assumenda, aut dignissimos enim error eum maiores nulla optio quasi quisquam,
      recusandae sed vitae, voluptatem voluptatibus. Amet cum delectus eius eligendi esse ex,
        nesciunt optio quam quos, soluta tenetur, veritatis?</p>
      <p>Ab autem doloribus et, illum magni maiores molestias natus nesciunt obcaecati
      omnis possimus quae quidem repudiandae sapiente similique soluta, veniam voluptatem.
        Atque eligendi eveniet explicabo quisquam ratione suscipit voluptate. Blanditiis.</p>
    </div>
  )
}

function App49(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={<ReactLayout />}>
            <Route path="install" element={<ContentPage title="install" />}/>
            <Route path="game" element={<ContentPage title="game" />}/>
            <Route path="state" element={<ContentPage title="state" />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App49;