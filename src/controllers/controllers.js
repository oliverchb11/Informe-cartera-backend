const controller = {};

controller.getNombreSucursal = (req, res) => {

    req.getConnection((err, connect) => {
        if (err) {
            res.json({
                messagge: 'Error con la conexion'
            });
        }
        connect.query('SELECT b.no_pedido_c,a.invoice_date ,b.saldo_c,c.name FROM aos_invoices a INNER JOIN aos_invoices_cstm b ON b.id_c = a.id INNER JOIN b13_sucursales c ON c.id = b.b13_sucursales_id_c LIMIT 20 ', (err, user) => {
            if (err) {
                res.json({
                    messagge: 'Error en la consulta',
                });
            }
            res.send(user);
        });


    })

};
controller.getFechaFactura = (req, res) => {

    req.getConnection((err, connect) => {
        if (err) {
            res.json({
                messagge: 'Error con la conexion'
            });
        }
        connect.query('SELECT date_entered FROM aos_invoices WHERE deleted = 0 LIMIT 20', (err, user) => {
            if (err) {
                res.json({
                    messagge: 'Error en la consulta',
                });
            }
            res.send(user);
        })
    })

};
controller.getNombreCliente = (req, res) => {

    req.getConnection((err, connect) => {
        if (err) {
            res.json({
                messagge: 'Error con la conexion'
            });
        }
        connect.query('SELECT name FROM accounts WHERE deleted = 0 LIMIT 20', (err, user) => {
            if (err) {
                res.json({
                    messagge: 'Error en la consulta',
                });
            }
            res.send(user);
        })
    })

};
controller.getSaldo = (req, res) => {

    req.getConnection((err, connect) => {
        if (err) {
            res.json({
                messagge: 'Error con la conexion'
            });
        }
        connect.query('SELECT saldo_c FROM aos_invoices_cstm  LIMIT 5', (err, user) => {
            if (err) {
                res.json({
                    messagge: 'Error en la consulta',
                });
            }
            res.send(user);
        })
    })

};
controller.getNumeroPedido = (req, res) => {

    req.getConnection((err, connect) => {
        if (err) {
            res.json({
                messagge: 'Error con la conexion'
            });
        }
        connect.query('SELECT no_pedido_c FROM aos_invoices_cstm  LIMIT 5', (err, user) => {
            if (err) {
                res.json({
                    messagge: 'Error en la consulta',
                });
            }
            res.send(user);
        })
    })

};

controller.getFacturasNoPagadas = (req, res) => {

    req.getConnection((err, connect) => {
        if (err) {
            res.json({
                messagge: 'Error con la conexion'
            });
        }
        connect.query('SELECT name FROM aos_invoices WHERE STATUS = "Unpaid"  LIMIT 40', (err, user) => {
            if (err) {
                res.json({
                    messagge: 'Error en la consulta',
                });
            }
            res.send(user);
        })
    })

};

module.exports = controller;