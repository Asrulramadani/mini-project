'use strict'

let data = [
    {
        namaBarang : 'Minyak Goreng',
        harga : '15.500',
        stok : 12,
    },
    {
        namaBarang : 'Gula Pasir',
        harga : '11.000',
        stok : 20
    },
    {
        namaBarang : 'Ikan Sarden',
        harga : '6.000',
        stok : 5
    },
    {
        namaBarang : 'Indomie Goreng',
        harga : '2.500',
        stok : 16
    },
    {
        namaBarang : 'Sabun Mandi',
        harga : '2.500',
        stok : 6
    }
]

let dataId = 0;



function showAll() {
    const tabel = document.getElementById('data_table');
    tabel.innerHTML = `
        <tr>
            <th>No</th>
            <th>Nama produk</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Action</th>
        </tr>`
    for(let i = 0; i < data.length; i++) {
        let j = i + 1;
        const newList = document.createElement('tr')
        newList.innerHTML = `    
                <td>${j}</td>
                <td>${data[i].namaBarang}</td>
                <td>Rp${data[i].harga},00</td>
                <td>${data[i].stok}</td>
                <td>
                    <button class="edit" onclick="edit(${i})">Edit</button>
                    <button class="del" onclick="del(${i})">Hapus</button>
                </td>`;

            tabel.appendChild(newList)
    }
}


function add() {
    const form = document.querySelector('#inputNew')
    const nama_Barang = document.getElementById('#namaBarang').value;
    const hargaBarang = document.getElementById('#harga').value;
    const stokBarang = document.getElementById('#stok').value;
    
    if(nama_Barang == '' || hargaBarang == '' || stokBarang == '') {
	return
       }
    else {
	let newObject = Object.create(
	     {
		namaBarang : nama_Barang,
		harga : hargaBarang,
		stok : stokBarang
	     }
	); 
        
    
        data.push(newObject);
        form.reset()
        showAll();
       }
}

function edit(id) {
    dataId = id

    const editContainer = document.querySelector('.edit_container');
    editContainer.classList.toggle('active')
    // const dataNew = prompt(`Edit`,id)
    // data[id].namaBarang = dataNew;
    const newNamaBarang = document.getElementById('editNamaBarang');
    const newHarga = document.getElementById('editHarga');
    const newStok = document.getElementById('editStok');

        newNamaBarang.value = data[dataId].namaBarang;
        newHarga.value = data[dataId].harga;
        newStok.value = data[dataId].stok;
}

function cancel() {
    const editContainer = document.querySelector('.edit_container');
    editContainer.classList.toggle('active')
}

function save() {
    const newNamaBarang = document.getElementById('editNamaBarang');
    const newHarga = document.getElementById('editHarga');
    const newStok = document.getElementById('editStok');
    data[dataId].namaBarang = newNamaBarang.value;
    data[dataId].harga = newHarga.value;
    data[dataId].stok = newStok.value;

    showAll()
    
    const editContainer = document.querySelector('.edit_container');
    editContainer.classList.toggle('active')
}

function del(id) {
    data.splice(id,1)
    showAll()
}

showAll()
