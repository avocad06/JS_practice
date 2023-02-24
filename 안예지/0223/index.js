// get all the elements
const paginationNumbers = document.getElementById('pagination-numbers');
const paginatedList = document.getElementById('paginated-list');
const listItems = paginatedList.querySelectorAll('li');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// define global variables
const paginationLimit = 3;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

const appendPageNumber = (index) => {
    const pageNumber = document.createElement('button');
    pageNumber.className = 'pagination-number';
    pageNumber.textContent = index;
    pageNumber.setAttribute('page-index', index);
    pageNumber.setAttribute('area-label', index + '페이지');

    paginationNumbers.appendChild(pageNumber)
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i)
    }
}

// call when the web page loads
window.addEventListener('load', () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevBtn.addEventListener('click', () => {
        setCurrentPage(currentPage - 1);
    });

    nextBtn.addEventListener('click', () => {
        setCurrentPage(currentPage + 1);
    })

    document.querySelectorAll('.pagination-number').forEach((button) => {
        const pageIndex = Number(button.getAttribute('page-index'));

        if (pageIndex) {
            button.addEventListener('click', () => {
                setCurrentPage(pageIndex);
            })
        }
    }
    )
});

const disableBtns = (button) => {
    button.classList.add('disabled');
    button.disabled = true;

};

const enableBtns = (button) => {
    button.classList.remove('disabled');
    button.removeAttribute('disabled');
}

const handlePageBtnsStatus = () => {
    if (currentPage == 1) {
        disableBtns(prevBtn);
    } else {
        enableBtns(prevBtn);
    }

    if (pageCount === currentPage) {
        disableBtns(nextBtn);
    } else {
        enableBtns(nextBtn);
    }
}

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageBtnsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;


    listItems.forEach((item, index) => {
        item.classList.add('hidden');
        if (index >= prevRange && index < currRange) {
            item.classList.remove('hidden');
        };
    })
}

function handleActivePageNumber() {
    document.querySelectorAll('.pagination-number').forEach((button) => {
        button.classList.remove('active');

        const pageIndex = Number(button.getAttribute('page-index'));
        if (pageIndex == currentPage) {
            button.classList.add('active');
        }
    })
}

