let mockData = [{
  id: '1',
  title: 'This is title',
  description: 'description 1',
  status: 'open',
  priority: 'high'
}, {
  id: '2',
  title: 'This is second title',
  description: 'description 2',
  status: 'open',
  priority: 'low'
}, {
  id: '3',
  title: 'This is third title',
  description: 'description 3',
  status: 'open',
  priority: 'normal'
}, {
  id: '4',
  title: 'This is forth title',
  description: 'description 4',
  status: 'done',
  priority: 'low'
}];
let filteredArray = [];

class Todo {

  constructor() {
    let self = this;
    this.todo_list = document.querySelector('#todo_items');
    this.render();

    document.querySelector('.btn-add-item').addEventListener('click', this.insertItem.bind(this));
    document.querySelector('.btn-update').addEventListener('click', this.updateItem.bind(this));

    document.addEventListener('click', event => {
      if (!event.target) {
        return;
      }

      if (event.target.classList.contains('btn-delete')) {
        self.removeItem(event);
      }

      if (event.target.classList.contains('btn-edit')) {
        self.renderEditForm(event);
      }

      if (event.target.classList.contains('btn-complete')) {
        self.setTaskComplete(event);
      }
    });

    document.addEventListener('change', event => {
      if (!event.target) {
        return;
      }

      if (event.target.classList.contains('filter')) {
        self.filterItems();
      }
    });
  }

  render(isFilter = false) {
    this.todo_list.innerHTML = '';
    let data;
    if (isFilter) {
      data = filteredArray;
    } else {
      data = mockData;
    }
    if (data.length === 0) {
      this.todo_list.innerHTML = '<div style="margin: 20px 0 0 50px;">nothing to show!</div>';
    }
    data.forEach(item => {
      this.createItemHtml(item.id, item.title, item.description, item.priority, item.status);
      this.todo_list.appendChild(this.item_block);
    });
  }

  filterItems() {
    let filterTitle = document.querySelector('.filter-title').value;
    let filterStatus = document.querySelector('.filter-status').value;
    let filterPriority = document.querySelector('.filter-priority').value;
    let filterFunction = function(item) {
      return (item.title.toLowerCase().includes(filterTitle.toLowerCase()) || filterTitle === '') && (item.priority === filterPriority || filterPriority === 'all') && (item.status === filterStatus || filterStatus === 'all');
    };
    filteredArray = mockData.filter(filterFunction);
    this.render(true);
  }

  renderEditForm(event) {
    let id = event.target.getAttribute('data-id');
    document.querySelector('.btn-update').setAttribute('data-id', id);

    mockData.forEach(item => {
      if (item.id === id) {
        document.querySelector('.edit_title').value = item.title;
        document.querySelector('.edit_description').value = item.description;
        document.querySelector('.edit_priority').value = item.priority;
      }
    });
  }

  createItemHtml(id, title = 'test', description = 'test', priority = 'test', status = 'open') {

    this.item_block = document.createElement('div');
    this.item_block.classList.add('item');
    this.item_block.innerHTML = `<div class="item-inner ${status === 'done' ? 'done' : ''}">
                <p class="item-title">${title}</p>
                <div class="item-body">${description}</div>
                <div class="item-footer">
                    <div class="priority">${priority}</div>
                    <a href="#" class="control">...</a>
                    <div class="control-center">
                        <div class="inner">
                            <div data-id="${id}" class="btn-complete">done</div>
                            <div><a data-id="${id}" class="btn-edit" href="#edit_popup" >edit</a></div>
                            <div data-id="${id}" class="btn-delete">delete</div>
                        </div>
                    </div>
                </div>
            </div>`;
  }

  insertItem() {
    window.location.href = '#';
    let itemTitle = document.getElementsByName('create_title')[0].value;
    let itemDescription = document.getElementsByName('create_description')[0].value;
    let itemPriority = document.getElementsByName('create_priority')[0].value;

    let newItem = {
      id: Date.now().toString(),
      title: itemTitle || 'default title',
      description: itemDescription || 'default description',
      priority: itemPriority,
      status: 'open'
    };

    mockData.push(newItem);
    document.getElementsByName('create_title')[0].value = '';
    document.getElementsByName('create_description')[0].value = '';
    document.querySelector('.filter-title').value = '';
    document.querySelector('.filter-priority').value = 'all';
    document.querySelector('.filter-status').value = 'all';
    this.render();
  }

  removeItem(event) {
    let id = event.target.getAttribute('data-id');

    mockData = mockData.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });

    this.render();
  }

  updateItem(event) {
    window.location.href = '#';
    let id = event.target.getAttribute('data-id');
    let itemTobeUpdatedTitle = document.querySelector('.edit_title').value;
    let itemTobeUpdatedDescription = document.querySelector('.edit_description').value;
    let itemTobeUpdatedPriority = document.querySelector('.edit_priority').value;

    mockData = mockData.map(item => {
      if (item.id === id) {
        item['title'] = itemTobeUpdatedTitle;
        item['description'] = itemTobeUpdatedDescription;
        item['priority'] = itemTobeUpdatedPriority;
      }

      return item;
    });

    this.render();
  }

  setTaskComplete(event) {
    let id = event.target.getAttribute('data-id');

    mockData = mockData.map(item => {
      if (item.id === id) {
        item['status'] = 'done';
      }

      return item;
    });

    this.render();
  }
}

export default Todo;
