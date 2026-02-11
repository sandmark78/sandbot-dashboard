import React, { useState, useEffect } from 'react';

const AgentDashboard = () => {
  const [logs] = useState([
    "🤖 [Sandbot] 初始化 5.0 路由引擎...",
    "🛡️ [TechBot] Base链区块扫描中 | 延迟: 280ms",
    "🚗 [AutoBot] 同步小米SU7最新贬值曲线 | Oracle置信度: 0.92"
  ]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#f3f4f6', padding: '1rem' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #374151', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#10b981' }}>5.0 Agent Matrix</h1>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '0.25rem' }}>全线贯通状态：🟢 运行中 | 保护机制：激活</p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {['Sandbot', 'TechBot', 'AutoBot', 'FinanceBot', 'CreativeBot'].map((agent, i) => (
          <div key={i} style={{ backgroundColor: '#1f2937', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ fontWeight: '700', color: '#10b981', marginBottom: '0.5rem' }}>{agent}</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.75rem' }}>状态：🟢 活跃</p>
          </div>
        ))}
      </div>
      
      <div style={{ backgroundColor: '#000', borderRadius: '0.5rem', border: '1px solid #374151', padding: '1rem' }}>
        <h3 style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem' }}>Live Execution Terminal</h3>
        <div style={{ height: '16rem', overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: '1.5' }}>
          {logs.map((log, i) => (
            <div key={i} style={{ color: '#d1d5db' }}>
              <span style={{ color: '#6b7280' }}>[{new Date().toLocaleTimeString()}]</span> {log}
            </div>
          ))}
          <div style={{ color: '#10b981', marginTop: '0.5rem' }}>
            <span style={{ animation: 'pulse 2s infinite' }}>█</span> 等待下一个套利区块...
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default AgentDashboard;