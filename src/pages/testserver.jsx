import React from 'react';
import Layout from '@theme/Layout';

export default function Testserver() {
    return (
        <Layout>
            <h1>服务器测试</h1>
            <p>内测区域,测试人员请联系开发团队获得key.</p>
            <div>
                
                <form action="" method="post">
                    
                    <label htmlFor="key">key</label>
                    
                    <input type="text" name="key" id="key" />
                    <div>                 
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}