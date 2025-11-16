from flask import Flask, request, jsonify
import psycopg
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def db():
    return psycopg.connect(
        f"dbname={os.environ.get('DBNAME')} user={os.environ.get('USER')} password={os.environ.get('PASSWORD')} host=localhost port=5432"
    )

@app.get("/api/items")
def list_items():
    with db() as conn:
        rows = conn.execute("select * from item").fetchall()
        return jsonify([dict(r) for r in rows])

@app.get("/api/items/<int:item_id>")
def get_item(item_id):
    with db() as conn:
        row = conn.execute("select * from item where id=%s", (item_id,)).fetchone()
        if not row:
            return jsonify({}), 404
        return jsonify(dict(row))

@app.post("/api/items")
def create_item():
    payload = request.json
    q = """
        insert into item(name, description, stock, price, rating)
        values (%s,%s,%s,%s,%s)
        returning *
    """
    vals = (
        payload.get("name"),
        payload.get("description"),
        payload.get("stock"),
        payload.get("price"),
        payload.get("rating"),
    )
    with db() as conn:
        row = conn.execute(q, vals).fetchone()
        conn.commit()
        return jsonify(dict(row))

@app.get("/api/users/<username>")
def get_user(username):
    with db() as conn:
        row = conn.execute("select * from user where username=%s", (username,)).fetchone()
        if not row:
            return jsonify({}), 404
        return jsonify(dict(row))

@app.post("/api/cart")
def add_cart():
    payload = request.json
    q = "insert into cart(username, item) values (%s,%s) returning *"
    vals = (payload["username"], payload["item"])
    with db() as conn:
        row = conn.execute(q, vals).fetchone()
        conn.commit()
        return jsonify(dict(row))

@app.get("/api/cart/<username>")
def get_cart(username):
    with db() as conn:
        rows = conn.execute(
            "select c.item, i.name, i.price from cart c join item i on c.item=i.id where c.username=%s",
            (username,),
        ).fetchall()
        return jsonify([dict(r) for r in rows])

@app.post("/api/order")
def create_order():
    payload = request.json
    q = """
        insert into "order"(username, item_id, delivered)
        values (%s,%s,%s)
        returning *
    """
    vals = (payload["username"], payload["item_id"], False)
    with db() as conn:
        row = conn.execute(q, vals).fetchone()
        conn.commit()
        return jsonify(dict(row))

@app.get("/api/order/<int:order_id>")
def get_order(order_id):
    with db() as conn:
        row = conn.execute(
            'select * from "order" where transaction_id=%s', (order_id,)
        ).fetchone()
        if not row:
            return jsonify({}), 404
        return jsonify(dict(row))

@app.post("/api/delivery")
def create_delivery():
    payload = request.json
    q = """
        insert into delivery(order_id, agent_id, status, delivery_date)
        values (%s,%s,%s,%s)
        returning *
    """
    vals = (
        payload["order_id"],
        payload["agent_id"],
        payload["status"],
        payload["delivery_date"],
    )
    with db() as conn:
        row = conn.execute(q, vals).fetchone()
        conn.commit()
        return jsonify(dict(row))

@app.post("/api/review")
def create_review():
    payload = request.json
    q = """
        insert into review(item_id, username, review)
        values (%s,%s,%s)
        returning *
    """
    vals = (payload["item_id"], payload["username"], payload["review"])
    with db() as conn:
        row = conn.execute(q, vals).fetchone()
        conn.commit()
        return jsonify(dict(row))

@app.get("/api/discounts")
def list_discounts():
    with db() as conn:
        rows = conn.execute("select * from discounts").fetchall()
        return jsonify([dict(r) for r in rows])

@app.get("/api/merchant/<int:merchant_id>")
def get_merchant(merchant_id):
    with db() as conn:
        row = conn.execute(
            "select * from merchant where id=%s", (merchant_id,)
        ).fetchone()
        if not row:
            return jsonify({}), 404
        return jsonify(dict(row))

@app.post("/api/merchant")
def create_merchant():
    payload = request.json
    q = """
        insert into merchant(name, email, phone_number, address, item)
        values (%s,%s,%s,%s,%s)
        returning *
    """
    vals = (
        payload["name"],
        payload["email"],
        payload["phone_number"],
        payload["address"],
        payload["item"],
    )
    with db() as conn:
        row = conn.execute(q, vals).fetchone()
        conn.commit()
        return jsonify(dict(row))

@app.get("/api/agent/<int:agent_id>")
def get_agent(agent_id):
    with db() as conn:
        row = conn.execute(
            "select * from agent where id=%s", (agent_id,)
        ).fetchone()
        if not row:
            return jsonify({}), 404
        return jsonify(dict(row))

if __name__ == "__main__":
    app.run(debug=True)
