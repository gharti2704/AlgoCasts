class Queue:
  def __init__(self):
    self.values = []

  def add(self, val):
    self.values.append(val)

  def delete(self):
    return self.values.pop(0)


q = Queue()
q.add(1)
q.add(5)
q.add(3)
print(q.values)
q.delete()
print(q.values)
q.delete()
print(q.values)
