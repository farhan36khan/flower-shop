import React from 'react';
import { openWhatsApp } from '../data/products';

const metrics = [
  { label: 'TOTAL REVENUE', value: '$0', change: '+14% this month', up: true },
  { label: 'ORDERS TODAY', value: '0', change: '+6 from yesterday', up: true },
  { label: 'PENDING DELIVERY', value: '0', change: '3 completed', up: false },
  { label: 'HAPPY CUSTOMERS', value: '312', change: '+22 this week', up: true },
];

const salesData = [32, 45, 28, 62, 54, 78, 41];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const maxSale = Math.max(...salesData);

const topProducts = [
  { img: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=80&q=70', name: 'Classic Red Roses', sales: 87, pct: 100 },
  { img: 'https://images.unsplash.com/photo-1487530811015-780b7b80b5de?w=80&q=70', name: 'Spring Mixed Bouquet', sales: 64, pct: 73 },
  { img: 'https://images.unsplash.com/photo-1464473972701-e3b5b7683504?w=80&q=70', name: 'Luxury Gift Set', sales: 51, pct: 58 },
  { img: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=80&q=70', name: 'Sunflower Sunshine', sales: 43, pct: 49 },
];

const orders = [
  { img: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=80&q=70', name: 'Classic Red Roses x2', meta: 'Sara K. · 2 mins ago', color: 'bg-blue-50 text-blue-700', label: 'Processing' },
  { img: 'https://images.unsplash.com/photo-1487530811015-780b7b80b5de?w=80&q=70', name: 'Spring Mixed Bouquet', meta: 'Ahmed R. · 18 mins ago', color: 'bg-amber-50 text-amber-700', label: 'Pending' },
  { img: 'https://images.unsplash.com/photo-1464473972701-e3b5b7683504?w=80&q=70', name: 'Luxury Gift Set', meta: 'Maria L. · 1 hr ago', color: 'bg-green-50 text-green-700', label: 'Delivered' },
  { img: 'https://images.unsplash.com/photo-1490750967868-88df5691cc83?w=80&q=70', name: 'Cherry Blossom Dream', meta: 'John P. · 2 hrs ago', color: 'bg-green-50 text-green-700', label: 'Delivered' },
  { img: 'https://images.unsplash.com/photo-1453906971074-ce568cccbc63?w=80&q=70', name: 'Tropical Paradise', meta: 'Zara M. · 3 hrs ago', color: 'bg-blue-50 text-blue-700', label: 'Processing' },
];

const Dashboard = () => (
  <div className="max-w-6xl mx-auto px-4 py-10">
    <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
      <div>
        <h2 className="font-serif text-3xl text-gray-900">Admin Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">Welcome back — here's what's blooming today</p>
      </div>
      <button onClick={() => openWhatsApp('Hi! I have a new order inquiry.')} className="bg-rose-600 hover:bg-rose-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition">
        + New Order via WhatsApp
      </button>
    </div>

    {/* Metrics */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((m) => (
        <div key={m.label} className="bg-white rounded-2xl border border-rose-100 p-5">
          <p className="text-xs text-gray-400 font-medium tracking-wide mb-1">{m.label}</p>
          <p className="font-serif text-3xl text-gray-900">{m.value}</p>
          <p className={`text-xs mt-1 ${m.up ? 'text-green-600' : 'text-rose-500'}`}>{m.change}</p>
        </div>
      ))}
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
      <div className="lg:col-span-2 bg-white rounded-2xl border border-rose-100 p-6">
        <p className="text-sm font-medium text-gray-800 mb-5">Weekly Sales</p>
        <div className="flex items-end gap-2 h-36 mb-2">
          {salesData.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
              <div
                className="w-full bg-rose-100 hover:bg-rose-400 rounded-t-md transition-colors cursor-pointer"
                style={{ height: `${Math.round((v / maxSale) * 100)}%` }}
                title={`${v} orders`}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {days.map((d) => <div key={d} className="flex-1 text-center text-xs text-gray-400">{d}</div>)}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-rose-100 p-6">
        <p className="text-sm font-medium text-gray-800 mb-5">Top Products</p>
        <div className="space-y-4">
          {topProducts.map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <img src={p.img} alt={p.name} loading="lazy" className="w-9 h-9 rounded-lg object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-700 truncate">{p.name}</p>
                <div className="h-1 bg-rose-100 rounded-full mt-1.5">
                  <div className="h-full bg-rose-400 rounded-full" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">{p.sales}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Orders */}
    <div className="bg-white rounded-2xl border border-rose-100 p-6 mb-5">
      <p className="text-sm font-medium text-gray-800 mb-4">Recent Orders</p>
      <div className="divide-y divide-rose-50">
        {orders.map((o, i) => (
          <div key={i} className="flex items-center gap-3 py-3">
            <img src={o.img} alt={o.name} loading="lazy" className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{o.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{o.meta}</p>
            </div>
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${o.color}`}>{o.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* WhatsApp CTA */}
    <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-7 flex items-center justify-between gap-5 flex-wrap">
      <div className="text-white">
        <h3 className="font-serif text-2xl mb-1">WhatsApp Order Center</h3>
        <p className="text-sm opacity-85">All customer orders flow through WhatsApp. Open your business chat.</p>
      </div>
      <button onClick={() => openWhatsApp('Hi! I want to place an order.')} className="bg-white text-teal-700 font-medium px-6 py-3 rounded-xl text-sm hover:bg-green-50 transition whitespace-nowrap">
        Open WhatsApp Business
      </button>
    </div>
  </div>
);

export default Dashboard;
