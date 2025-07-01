import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_re5AnmJa_8oU1fCdx4UDM91fbUb8YfgZ4')

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, asunto, mensaje } = await request.json()

    // Validaciones básicas
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Enviar email
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['inidesarrollos@gmail.com'],
      subject: `Nuevo mensaje de contacto: ${asunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #10b981; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
              📧 Nuevo mensaje de contacto
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 5px;">👤 Información del remitente:</h3>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Nombre:</strong> ${nombre}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Asunto:</strong> ${asunto}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">💬 Mensaje:</h3>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${mensaje}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Este mensaje fue enviado desde tu portfolio web - INI Dev
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado correctamente',
      data 
    })

  } catch (error) {
    console.error('Error al enviar email:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
} 