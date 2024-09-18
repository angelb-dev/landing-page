import '../css/PricingComponent.css'

const PricingComponent = () => {
  const plans = [
    {
      name: 'Plan Básico',
      price: '$10',
      features: [
        'Acceso básico a la plataforma',
        'Soporte básico',
        'Almacenamiento limitado'
      ]
    },
    {
      name: 'Plan Intermedio',
      price: '$30',
      features: [
        'Acceso completo a la plataforma',
        'Soporte prioritario',
        'Almacenamiento ampliado'
      ]
    },
    {
      name: 'Plan Alto',
      price: '$99',
      features: [
        'Acceso completo a la plataforma',
        'Soporte prioritario y personalizado',
        'Almacenamiento ilimitado'
      ]
    },
    {
      name: 'Plan Premium Intermedio',
      price: '$600',
      features: [
        'Acceso completo a la plataforma con características avanzadas',
        'Soporte prioritario y personalizado con asistencia de expertos',
        'Almacenamiento ilimitado y respaldo de datos'
      ]
    },
    {
      name: 'Plan Premium',
      price: '$1200',
      features: [
        'Acceso completo a la plataforma con características avanzadas',
        'Soporte prioritario y personalizado con asistencia de expertos',
        'Almacenamiento ilimitado y respaldo de datos'
      ]
    }
  ]

  return (
    <div className='pricing-container'>
      {plans.map((plan, index) => (
        <div key={index} className='pricing-card'>
          <div>
            <h3 className='plan-name'>{plan.name}</h3>
            <p className='plan-price'>{plan.price}</p>
            <p className='plan-period'>por mes</p>
            <ul className='feature-list'>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className='feature-item'>
                  <svg className='check-icon' viewBox='0 0 20 20'>
                    <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <button className='subscribe-button'>Suscribirse</button>
        </div>
      ))}
    </div>
  )
}

export default PricingComponent
