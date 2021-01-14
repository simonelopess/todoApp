import React, {Component} from 'react';
import PageHeader from '../template/pageHeader';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name="Sobre" small="Nós"/>
        <h2>Nossa História</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fugiat necessitatibus animi facilis, perspiciatis earum doloribus dolore consequatur beatae deleniti minus numquam recusandae natus deserunt consectetur mollitia odit commodi corporis?</p>
        <h2>Missão e Visão</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore distinctio consectetur nisi incidunt rem similique impedit, deserunt illum aliquam culpa quidem praesentium.</p>
        <h2>Imprensa</h2>
        <p>Lorem Ipsum dolor sit amet...</p>
      </div>
    )
  }
}