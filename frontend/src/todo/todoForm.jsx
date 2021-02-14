import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton';
import { changeDescription } from './todoActions'

const TodoForm = props => {

  const keyHandler = (e) => {
    if (e.key === 'Enter') { /* enter adiciona */
      e.shiftKey ? props.handleSearch() : props.handleAdd() /* shift + enter pesquisa */
    } else if (e.key === 'Escape') { /* esc limpar tabela */
      props.handleClear()
    }
  }
  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input id="description" className="form-control"
          placeholder="Adicione uma tarefa"
          value={props.description}
          onChange={props.changeDescription} /* chamada do método da action */
          onKeyUp={keyHandler}
        >
        </input>
      </Grid>
      <Grid cols="12 3 2">
        <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton style="info" icon='search'
          onClick={props.handleSearch}>
        </IconButton>
        <IconButton style="default" icon="close"
          onClick={props.handleClear}></IconButton>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => 
      bindActionCreators({ changeDescription }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)