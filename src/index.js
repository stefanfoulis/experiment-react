import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Task(props) {
    const divStyles = {
        // 'width': '20px',
        'height': '20px',
        'line-height': '20px',
        'background-color': 'gray',
        'border': '1px solid black',
        'padding': '3px',
        'margin': '5px',
        'text-align': 'center',
    };
    return (
        <div style={divStyles}>
            {props.task.name}
        </div>

    )
}


class Queue extends React.Component {
    render() {
        const divStyles = {
            'width': '200px',
            'border': '1px solid black',
            'border-top': 'none',
            'padding': '3px',
            'margin': '5px',
            'text-align': 'center',
        };
        return (
            <div className="queue" style={divStyles}>
                <div>
                    {
                        this.props.tasks.map(
                            function(object, i){
                                return <Task task={object} />;
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}


class WorkerInstance extends React.Component {
    render() {
        return (
            <div>
                <Task task={this.props.currentTask} />
            </div>
        )
    }
}


function randomTask() {
    var task = {};
    task.id = String(Math.floor(Math.random() * 1000000000));
    task.name = "Task " + task.id;
    return task
}


class App extends React.Component {
    constructor(props) {
        super(props);
        const tasks = [
            randomTask(),
            randomTask(),
            randomTask(),
            randomTask(),
            randomTask(),
            randomTask(),
            randomTask(),
            randomTask(),
            randomTask(),
            randomTask(),
            randomTask(),
            randomTask(),
        ];
        this.state = {
            tasks: tasks,
            currentTask: randomTask(),
        };
    }

    render() {
        return (
            <div className="app">
                <Queue
                    tasks={this.state.tasks}
                />
                <WorkerInstance
                    currentTask={this.state.currentTask}
                />
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);